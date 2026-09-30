<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFirestore, doc, getDoc, setDoc, collection, onSnapshot, deleteDoc } from 'firebase/firestore'

const route = useRoute()
const router = useRouter()
const db = getFirestore()

const gradeName = route.params.gradeName
const bookings = ref([])
const searchQuery = ref('')
const isLoading = ref(false)
const isSavingSettings = ref(false)
const isUploading = ref(false)

const gradeSettings = ref({
  startDateText: '',
  isBookingActive: true,
  schedules: { 
    boys: [''], 
    girls: [''] 
  },
  frontBookImage: '',
  backBookImage: '',
  generalBookLocation: 'مكتبة الأستاذ ممدوح عند مصطفى كلر'
})

let unsubscribeBookings = null

const filteredBookings = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return bookings.value.filter(booking => {
    if (booking.gradeName !== gradeName) return false
    const nameMatch = booking.name ? booking.name.toLowerCase().includes(query) : false
    const phoneMatch = booking.phone ? booking.phone.includes(query) : false
    const parentMatch = booking.parentPhone ? booking.parentPhone.includes(query) : false
    return !query || nameMatch || phoneMatch || parentMatch
  })
})

async function fetchSettings() {
  try {
    const docRef = doc(db, 'siteSettings', 'general')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const data = docSnap.data()
      
      // جلب مكان الحصول على الكتاب العام إن وجد
      const globalLocation = data.generalBookLocation || 'مكتبة الأستاذ ممدوح عند مصطفى كلر'

      if (data[gradeName]) {
        const savedData = data[gradeName]
        if (typeof savedData.schedules?.boys === 'string') {
          savedData.schedules.boys = [savedData.schedules.boys]
        }
        if (typeof savedData.schedules?.girls === 'string') {
          savedData.schedules.girls = [savedData.schedules.girls]
        }
        gradeSettings.value = { 
          ...gradeSettings.value, 
          ...savedData,
          generalBookLocation: globalLocation,
          schedules: {
            boys: savedData.schedules?.boys?.length ? savedData.schedules.boys : [''],
            girls: savedData.schedules?.girls?.length ? savedData.schedules.girls : ['']
          }
        }
      } else {
        gradeSettings.value.generalBookLocation = globalLocation
      }
    }
  } catch (error) {
    console.error('Error fetching settings:', error)
  }
}

function updateSlotCount(gender, count) {
  const num = parseInt(count) || 1
  const currentArr = gradeSettings.value.schedules[gender]
  if (num > currentArr.length) {
    while (currentArr.length < num) {
      currentArr.push('')
    }
  } else {
    gradeSettings.value.schedules[gender] = currentArr.slice(0, num)
  }
}

function resetToDefaultImages() {
  gradeSettings.value.frontBookImage = '/imges/imges_boock/front(1).jpeg'
  gradeSettings.value.backBookImage = '/imges/imges_boock/back(1).jpeg'
}

// دالة ضغط ومعالجة الصورة محلياً
async function uploadImageToCloud(event, imageType) {
  const file = event.target.files[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    alert('الرجاء اختيار ملف صورة صالح.')
    return
  }

  isUploading.value = true

  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.src = e.target.result
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const MAX_WIDTH = 600
      const MAX_HEIGHT = 800
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }

      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7)

      if (imageType === 'front') {
        gradeSettings.value.frontBookImage = compressedDataUrl
      } else {
        gradeSettings.value.backBookImage = compressedDataUrl
      }

      isUploading.value = false
      alert('تم تحميل ومعالجة الصورة بنجاح! اضغط الآن على "حفظ وتطبيق التعديلات".')
    }
  }

  reader.onerror = () => {
    alert('حدث خطأ أثناء قراءة الصورة.')
    isUploading.value = false
  }

  reader.readAsDataURL(file)
}

async function saveSettings() {
  try {
    isSavingSettings.value = true
    const docRef = doc(db, 'siteSettings', 'general')
    
    // نقوم بحفظ إعدادات الصف بالإضافة إلى مكان الحصول على الكتاب في المستوى الجذري للمستند ليكون موحداً
    await setDoc(docRef, { 
      [gradeName]: gradeSettings.value,
      generalBookLocation: gradeSettings.value.generalBookLocation 
    }, { merge: true })
    
    alert(`تم حفظ إعدادات ${gradeName} وتحديث مكان الكتاب بنجاح!`)
  } catch (error) {
    console.error('Error saving settings:', error)
    alert('حدث خطأ أثناء الحفظ.')
  } finally {
    isSavingSettings.value = false
  }
}

function fetchBookings() {
  isLoading.value = true
  unsubscribeBookings = onSnapshot(collection(db, 'bookings'), (snapshot) => {
    bookings.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    isLoading.value = false
  })
}

async function deleteBooking(booking) {
  if (!confirm(`هل أنت متأكد من حذف الحجز؟`)) return
  try {
    await deleteDoc(doc(db, 'bookings', booking.id))
  } catch (error) {
    console.error('Error deleting booking:', error)
  }
}

onMounted(() => {
  fetchSettings()
  fetchBookings()
})

onBeforeUnmount(() => {
  if (unsubscribeBookings) unsubscribeBookings()
})
</script>

<template>
  <main class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4 bg-light p-3 rounded shadow-sm">
      <button class="btn btn-outline-secondary btn-sm fw-bold" @click="router.push('/admin/dashboard')">
        <i class="fa-solid fa-arrow-right me-1"></i> العودة للقائمة الرئيسية
      </button>
      <h3 class="fw-bold text-primary mb-0">إدارة: {{ gradeName }}</h3>
      <button class="btn btn-outline-primary btn-sm" @click="fetchBookings">
        <i class="fa-solid fa-rotate-right me-1"></i> تحديث
      </button>
    </div>

    <div class="card border-0 shadow-sm p-4 mb-4 bg-white">
      <h5 class="fw-bold text-dark mb-3">
        <i class="fa-solid fa-gears text-primary me-2"></i> إعدادات وتعديلات الصف
      </h5>

      <div class="mb-3">
        <label class="form-label fw-bold small">رسالة وتاريخ البدء:</label>
        <input v-model="gradeSettings.startDateText" type="text" class="form-control" />
      </div>

      <div class="mb-3 form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" v-model="gradeSettings.isBookingActive" id="bookingSwitch">
        <label class="form-check-label fw-bold" for="bookingSwitch">تفعيل استقبال الحجوزات لهذا الصف</label>
      </div>

      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <div class="p-3 border rounded bg-light">
            <h6 class="fw-bold text-dark mb-3"><i class="fa-solid fa-clock me-1 text-primary"></i> مواعيد حصص الأولاد</h6>
            
            <div class="mb-3">
              <label class="form-label small fw-semibold">عدد المواعيد المتاحة للأولاد:</label>
              <select :value="gradeSettings.schedules.boys.length" @change="updateSlotCount('boys', $event.target.value)" class="form-select form-select-sm">
                <option v-for="n in 5" :key="n" :value="n">{{ n }} موعد</option>
              </select>
            </div>

            <div v-for="(slot, idx) in gradeSettings.schedules.boys" :key="'boy-' + idx" class="mb-2">
              <label class="form-label small text-muted">ميعاد الأولاد رقم ({{ idx + 1 }}):</label>
              <input v-model="gradeSettings.schedules.boys[idx]" type="text" class="form-control form-control-sm" placeholder="مثال: 10:00 صباحاً" />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="p-3 border rounded bg-light">
            <h6 class="fw-bold text-dark mb-3"><i class="fa-solid fa-clock me-1 text-primary"></i> مواعيد حصص البنات</h6>
            
            <div class="mb-3">
              <label class="form-label small fw-semibold">عدد المواعيد المتاحة للبنات:</label>
              <select :value="gradeSettings.schedules.girls.length" @change="updateSlotCount('girls', $event.target.value)" class="form-select form-select-sm">
                <option v-for="n in 5" :key="n" :value="n">{{ n }} موعد</option>
              </select>
            </div>

            <div v-for="(slot, idx) in gradeSettings.schedules.girls" :key="'girl-' + idx" class="mb-2">
              <label class="form-label small text-muted">ميعاد البنات رقم ({{ idx + 1 }}):</label>
              <input v-model="gradeSettings.schedules.girls[idx]" type="text" class="form-control form-control-sm" placeholder="مثال: 1:00 ظهراً" />
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="p-3 border rounded bg-light">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold text-dark mb-0"><i class="fa-solid fa-book me-1 text-primary"></i> صور الكتاب الدراسي ومكان الحصول عليه</h6>
              <button type="button" class="btn btn-outline-secondary btn-sm" @click="resetToDefaultImages">
                <i class="fa-solid fa-rotate-left me-1"></i> الرجوع للصور الأساسية
              </button>
            </div>

            <!-- مكان الحصول على الكتاب الموحد -->
            <div class="mb-3">
              <label class="form-label small fw-bold text-primary">مكان الحصول على الكتاب (موحد لجميع الصفوف):</label>
              <input v-model="gradeSettings.generalBookLocation" type="text" class="form-control" placeholder="مثال: مكتبة الأستاذ ممدوح عند مصطفى كلر" />
            </div>

            <div v-if="isUploading" class="alert alert-info py-2 small mb-2">
              <span class="spinner-border spinner-border-sm me-1"></span> جاري معالجة وضغط الصورة محلياً...
            </div>

            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small fw-semibold">اختر الصورة الأمامية من الجهاز:</label>
                <input type="file" class="form-control form-control-sm mb-2" accept="image/*" @change="e => uploadImageToCloud(e, 'front')" />
                <input v-model="gradeSettings.frontBookImage" type="text" class="form-control form-control-sm" placeholder="رابط الصورة أو مسارها" />
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-semibold">اختر الصورة الخلفية من الجهاز:</label>
                <input type="file" class="form-control form-control-sm mb-2" accept="image/*" @change="e => uploadImageToCloud(e, 'back')" />
                <input v-model="gradeSettings.backBookImage" type="text" class="form-control form-control-sm" placeholder="رابط الصورة أو مسارها" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-end">
        <button class="btn btn-success fw-bold px-4" @click="saveSettings" :disabled="isSavingSettings || isUploading">
          <span v-if="isSavingSettings" class="spinner-border spinner-border-sm me-1"></span>
          حفظ وتطبيق التعديلات
        </button>
      </div>
    </div>

    <div class="card border-0 shadow-sm p-3 mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold mb-0">قائمة الحجوزات ({{ filteredBookings.length }})</h5>
        <input v-model="searchQuery" type="text" class="form-control w-50" placeholder="ابحث باسم الطالب أو رقم الهاتف..." />
      </div>

      <div v-if="isLoading" class="text-center py-4">
        <div class="spinner-border text-primary"></div>
      </div>

      <div v-else class="table-responsive bg-white">
        <table class="table table-hover align-middle mb-0 text-center">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>اسم الطالب</th>
              <th>رقم الهاتف</th>
              <th>ولي الأمر</th>
              <th>النوع</th>
              <th>الميعاد</th>
              <th>التسجيل</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(booking, index) in filteredBookings" :key="booking.id">
              <td>{{ index + 1 }}</td>
              <td class="fw-bold text-primary">{{ booking.name || '-' }}</td>
              <td>{{ booking.phone || '-' }}</td>
              <td>{{ booking.parentPhone || '-' }}</td>
              <td>
                <span :class="booking.gender === 'ذكر' ? 'badge bg-primary' : 'badge bg-danger'">
                  {{ booking.gender || '-' }}
                </span>
              </td>
              <td class="fw-semibold">{{ booking.timeSlot || '-' }}</td>
              <td class="text-muted small">{{ booking.createdAt || '-' }}</td>
              <td>
                <button class="btn btn-outline-danger btn-sm" @click="deleteBooking(booking)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr v-if="filteredBookings.length === 0">
              <td colspan="8" class="text-center py-4 text-muted">لا توجد حجوزات مطابقة.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>