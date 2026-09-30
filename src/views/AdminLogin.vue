<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()

const loginEmail = ref('')
const loginPassword = ref('')
const authError = ref('')
const isAuthLoading = ref(false)

async function login() {
  authError.value = ''
  isAuthLoading.value = true

  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    router.push('/admin/dashboard')
  } catch (error) {
    console.error('Login error:', error)
    authError.value = 'بيانات الدخول غير صحيحة أو حدث خطأ بالاتصال.'
  } finally {
    isAuthLoading.value = false
  }
}
</script>

<template>
  <main class="container py-5">
    <section class="card login-card shadow border-0 p-4">
      <div class="text-center mb-4">
        <i class="fa-solid fa-user-shield fa-3x text-primary mb-2"></i>
        <h4 class="fw-bold text-dark">تسجيل دخول الآدمن</h4>
        <p class="text-muted small">لوحة التحكم الإحترافية لمستر عارف للرياضيات</p>
      </div>

      <form @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">البريد الإلكتروني</label>
          <input v-model="loginEmail" type="email" class="form-control" placeholder="admin@example.com" required />
        </div>

        <div class="mb-3">
          <label class="form-label">كلمة السر</label>
          <input v-model="loginPassword" type="password" class="form-control" required />
        </div>

        <div v-if="authError" class="alert alert-danger py-2 small mb-3">
          {{ authError }}
        </div>

        <button type="submit" class="btn btn-primary w-100 fw-bold" :disabled="isAuthLoading">
          <span v-if="isAuthLoading" class="spinner-border spinner-border-sm me-1"></span>
          {{ isAuthLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول' }}
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.login-card { max-width: 420px; margin: 80px auto; border-radius: 16px; }
</style>