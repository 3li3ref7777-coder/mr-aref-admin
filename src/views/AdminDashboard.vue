<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const router = useRouter()
const db = getFirestore()
const auth = getAuth()

const bookingsCount = ref({
  'الصف الأول الإعدادي': 0,
  'الصف الثاني الإعدادي': 0,
  'الصف الثالث الإعدادي': 0,
})

async function fetchCounts() {
  try {
    const snapshot = await getDocs(collection(db, 'bookings'))
    const counts = { 'الصف الأول الإعدادي': 0, 'الصف الثاني الإعدادي': 0, 'الصف الثالث الإعدادي': 0 }
    
    snapshot.docs.forEach(doc => {
      const data = doc.data()
      if (counts[data.gradeName] !== undefined) {
        counts[data.gradeName]++
      }
    })
    bookingsCount.value = counts
  } catch (error) {
    console.error('Error fetching counts:', error)
  }
}

function selectGrade(gradeName) {
  router.push({ name: 'GradeManagement', params: { gradeName } })
}

async function logout() {
  await signOut(auth)
  router.push('/admin/login')
}

onMounted(() => {
  fetchCounts()
})
</script>

<template>
  <main class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
      <div>
        <h2 class="fw-bold text-primary mb-1">لوحة التحكم الرئيسية</h2>
        <p class="text-muted mb-0">اختر الصف الدراسي لإدارة المواعيد، الحجوزات، والكتب الدراسية</p>
      </div>
      <button class="btn btn-outline-danger btn-sm" @click="logout">
        <i class="fa-solid fa-right-from-bracket me-1"></i> تسجيل خروج
      </button>
    </div>

    <div class="row g-4 my-3">
      <div 
        v-for="(count, grade) in bookingsCount" 
        :key="grade"
        class="col-md-4"
      >
        <div class="card grade-select-card shadow-sm border-0 p-4 text-center h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="icon-box bg-primary-subtle text-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
              <i class="fa-solid fa-graduation-cap fa-2x"></i>
            </div>
            <h4 class="fw-bold text-dark mb-2">{{ grade }}</h4>
            <p class="text-muted small mb-3">إجمالي الحجوزات: <span class="badge bg-primary">{{ count }}</span> طالب</p>
          </div>
          <button class="btn btn-primary fw-bold w-100" @click="selectGrade(grade)">
            <i class="fa-solid fa-sliders me-1"></i> إدارة وتعديل الصف
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.grade-select-card { transition: transform 0.2s ease, box-shadow 0.2s ease; border-radius: 16px; }
.grade-select-card:hover { transform: translateY(-5px); box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
</style>