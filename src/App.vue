<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getApps, initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCY_fSuAboQFnQjKI7767EGCd-YYECRI78',
  authDomain: 'mr-aref-math.firebaseapp.com',
  projectId: 'mr-aref-math',
  storageBucket: 'mr-aref-math.firebasestorage.app',
  messagingSenderId: '786425823803',
  appId: '1:786425823803:web:b7a25578b8c88b961b521e',
  measurementId: 'G-7BK1MB993T',
}

const firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

const isLoggedIn = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const authError = ref('')
const isAuthLoading = ref(false)

const bookings = ref([])
const searchQuery = ref('')
const selectedGradeFilter = ref('')
const isLoading = ref(false)

let unsubscribeBookings = null
let unsubscribeAuth = null

const filteredBookings = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return bookings.value.filter((booking) => {
    const nameMatch = booking.name
      ? booking.name.toLowerCase().includes(query)
      : false

    const phoneMatch = booking.phone
      ? booking.phone.includes(query)
      : false

    const parentPhoneMatch = booking.parentPhone
      ? booking.parentPhone.includes(query)
      : false

    const matchesSearch =
      !query || nameMatch || phoneMatch || parentPhoneMatch

    const matchesGrade =
      !selectedGradeFilter.value ||
      booking.gradeName === selectedGradeFilter.value

    return matchesSearch && matchesGrade
  })
})

function countByGrade(gradeName) {
  return bookings.value.filter(
    (booking) => booking.gradeName === gradeName,
  ).length
}

async function login() {
  authError.value = ''
  isAuthLoading.value = true

  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value,
    )
  } catch (error) {
    console.error('Login error:', error)
    authError.value = 'بيانات الدخول غير صحيحة أو حدث خطأ بالاتصال.'
  } finally {
    isAuthLoading.value = false
  }
}

async function logout() {
  try {
    await signOut(auth)
    bookings.value = []

    if (unsubscribeBookings) {
      unsubscribeBookings()
      unsubscribeBookings = null
    }
  } catch (error) {
    console.error('Logout error:', error)
  }
}

function fetchBookings() {
  if (unsubscribeBookings) {
    unsubscribeBookings()
  }

  isLoading.value = true

  unsubscribeBookings = onSnapshot(
    collection(db, 'bookings'),

    (snapshot) => {
      bookings.value = snapshot.docs.map((bookingDoc) => ({
        id: bookingDoc.id,
        ...bookingDoc.data(),
      }))

      isLoading.value = false
    },

    (error) => {
      console.error('خطأ في الاتصال بقاعدة البيانات:', error)
      isLoading.value = false
      alert(`خطأ اتصال: ${error.message}`)
    },
  )
}

async function deleteBooking(booking) {
  const confirmed = confirm(
    `هل أنت متأكد من حذف حجز الطالب (${booking.name || 'بدون اسم'})؟`,
  )

  if (!confirmed) return

  try {
    await deleteDoc(doc(db, 'bookings', booking.id))
    alert('تم حذف الحجز بنجاح.')
  } catch (error) {
    console.error('خطأ أثناء حذف الحجز:', error)
    alert('فشل عملية الحذف من قاعدة البيانات.')
  }
}

async function clearAllBookings() {
  const confirmed = confirm(
    'تنبيه: هل أنت متأكد من مسح جميع الحجوزات المخزنة من قاعدة البيانات؟',
  )

  if (!confirmed) return

  try {
    isLoading.value = true

    const snapshot = await getDocs(collection(db, 'bookings'))

    await Promise.all(
      snapshot.docs.map((bookingDoc) => deleteDoc(bookingDoc.ref)),
    )

    alert('تم مسح جميع الحجوزات بنجاح.')
  } catch (error) {
    console.error('خطأ في مسح الحجوزات:', error)
    alert('حدث خطأ أثناء المسح.')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = Boolean(user)

    if (user) {
      fetchBookings()
    } else {
      bookings.value = []

      if (unsubscribeBookings) {
        unsubscribeBookings()
        unsubscribeBookings = null
      }
    }
  })
})

onBeforeUnmount(() => {
  if (unsubscribeBookings) unsubscribeBookings()
  if (unsubscribeAuth) unsubscribeAuth()
})
</script>

<template>
  <main class="container py-5">
    <!-- Login -->
    <section
      v-if="!isLoggedIn"
      class="card login-card shadow border-0 p-4"
    >
      <div class="text-center mb-4">
        <i class="fa-solid fa-user-shield fa-3x text-primary mb-2"></i>
        <h4 class="fw-bold text-dark">تسجيل دخول الآدمن</h4>
        <p class="text-muted small">
          يرجى إدخال البيانات للوصول إلى لوحة الحجوزات
        </p>
      </div>

      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">البريد الإلكتروني</label>
          <input
            v-model="loginEmail"
            type="email"
            class="form-control"
            placeholder="admin@example.com"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">كلمة السر</label>
          <input
            v-model="loginPassword"
            type="password"
            class="form-control"
            required
          />
        </div>

        <div
          v-if="authError"
          class="alert alert-danger py-2 small mb-3"
        >
          {{ authError }}
        </div>

        <button
          type="submit"
          class="btn btn-primary w-100 fw-bold"
          :disabled="isAuthLoading"
        >
          <span
            v-if="isAuthLoading"
            class="spinner-border spinner-border-sm me-1"
          ></span>

          {{ isAuthLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول' }}
        </button>
      </form>
    </section>

    <!-- Dashboard -->
    <section v-else>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="fw-bold text-primary mb-1">لوحة إدارة الحجوزات</h2>
          <p class="text-muted mb-0">
            عرض وتجميع بيانات الطلاب المسجلين
          </p>
        </div>

        <div class="d-flex gap-2">
          <button
            class="btn btn-outline-primary btn-sm"
            @click="fetchBookings"
          >
            <i class="fa-solid fa-rotate-right me-1"></i>
            تحديث البيانات
          </button>

          <button
            v-if="bookings.length"
            class="btn btn-outline-danger btn-sm"
            @click="clearAllBookings"
          >
            <i class="fa-solid fa-trash me-1"></i>
            مسح كافة الحجوزات
          </button>

          <button
            class="btn btn-secondary btn-sm"
            @click="logout"
          >
            <i class="fa-solid fa-right-from-bracket me-1"></i>
            خروج
          </button>
        </div>
      </div>

      <!-- Statistics -->
      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <div class="card stat-card bg-primary text-white p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1">إجمالي الحجوزات</h6>
                <h3 class="fw-bold mb-0">{{ bookings.length }}</h3>
              </div>
              <i class="fa-solid fa-users fa-2x opacity-50"></i>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card stat-card bg-info text-white p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1">1 إعدادي</h6>
                <h3 class="fw-bold mb-0">
                  {{ countByGrade('الصف الأول الإعدادي') }}
                </h3>
              </div>
              <i class="fa-solid fa-user-graduate fa-2x opacity-50"></i>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card stat-card bg-warning text-dark p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1">2 إعدادي</h6>
                <h3 class="fw-bold mb-0">
                  {{ countByGrade('الصف الثاني الإعدادي') }}
                </h3>
              </div>
              <i class="fa-solid fa-user-graduate fa-2x opacity-50"></i>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card stat-card bg-success text-white p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1">3 إعدادي</h6>
                <h3 class="fw-bold mb-0">
                  {{ countByGrade('الصف الثالث الإعدادي') }}
                </h3>
              </div>
              <i class="fa-solid fa-user-graduate fa-2x opacity-50"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="card border-0 shadow-sm p-3 mb-4">
        <div class="row g-3">
          <div class="col-md-8">
            <div class="input-group">
              <span class="input-group-text bg-white">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>

              <input
                v-model="searchQuery"
                type="text"
                class="form-control"
                placeholder="ابحث باسم الطالب أو رقم الهاتف..."
              />
            </div>
          </div>

          <div class="col-md-4">
            <select
              v-model="selectedGradeFilter"
              class="form-select"
            >
              <option value="">جميع المراحل الدراسية</option>
              <option value="الصف الأول الإعدادي">
                الصف الأول الإعدادي
              </option>
              <option value="الصف الثاني الإعدادي">
                الصف الثاني الإعدادي
              </option>
              <option value="الصف الثالث الإعدادي">
                الصف الثالث الإعدادي
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div
        v-if="isLoading"
        class="text-center py-5"
      >
        <div class="spinner-border text-primary"></div>
        <p class="mt-2 text-muted">
          جاري تحميل بيانات الحجوزات من Firebase...
        </p>
      </div>

      <!-- Table -->
      <div
        v-else
        class="table-responsive bg-white"
      >
        <table class="table table-hover align-middle mb-0 text-center">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>اسم الطالب</th>
              <th>رقم الطالب</th>
              <th>رقم ولي الأمر</th>
              <th>النوع</th>
              <th>السنة الدراسية</th>
              <th>ميعاد الحصة</th>
              <th>تاريخ التسجيل</th>
              <th>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(booking, index) in filteredBookings"
              :key="booking.id"
            >
              <td>{{ index + 1 }}</td>
              <td class="fw-bold text-primary">
                {{ booking.name || 'غير محدد' }}
              </td>
              <td>
                <span class="badge bg-light text-dark border">
                  {{ booking.phone || '-' }}
                </span>
              </td>
              <td>
                <span class="badge bg-light text-dark border">
                  {{ booking.parentPhone || '-' }}
                </span>
              </td>
              <td>
                <span
                  :class="booking.gender === 'ذكر'
                    ? 'badge bg-primary'
                    : 'badge bg-danger'"
                >
                  {{ booking.gender || '-' }}
                </span>
              </td>
              <td>
                <span class="badge bg-secondary">
                  {{ booking.gradeName || '-' }}
                </span>
              </td>
              <td class="fw-semibold">
                {{ booking.timeSlot || '-' }}
              </td>
              <td class="text-muted small">
                {{ booking.createdAt || '-' }}
              </td>
              <td>
                <button
                  class="btn btn-outline-danger btn-sm"
                  title="حذف"
                  @click="deleteBooking(booking)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <tr v-if="filteredBookings.length === 0">
              <td
                colspan="9"
                class="text-center py-4 text-muted"
              >
                لا توجد بيانات مطابقة للبحث أو لا توجد حجوزات مسجلة بعد.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<style>
body {
  background-color: #f8f9fa;
  font-family: "Cairo", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  direction: rtl;
}

.stat-card {
  border: none;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

.table-responsive {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.login-card {
  max-width: 420px;
  margin: 80px auto;
  border-radius: 16px;
}
</style>