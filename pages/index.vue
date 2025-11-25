<template>
  <div class="container">
    <h1>Nuxt + Vue 3.5 + Element Plus</h1>
    <div class="actions">
      <el-button type="primary" @click="checkPing">调用 /api/ping</el-button>
      <el-button @click="checkUsers">调用 /api/users</el-button>
    </div>
    <div class="result">
      <el-card>
        <div>Ping: {{ pingResult }}</div>
      </el-card>
    </div>
    <div class="result">
      <el-card>
        <div v-if="usersError">{{ usersError }}</div>
        <el-table v-else :data="usersRows" style="width: 100%">
          <el-table-column prop="ok" label="ok" />
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp()

const pingResult = ref('未调用')
const usersRows = ref<any[]>([])
const usersError = ref('')

async function checkPing() {
  const res = await $axios.get('/ping')
  pingResult.value = res.message
}

async function checkUsers() {
  usersError.value = ''
  usersRows.value = []
  try {
    const res = await $axios.get('/users')
    usersRows.value = res.rows as any[]
  } catch (e: any) {
    usersError.value = e?.response?.data?.message || '请求失败'
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 16px;
}
.actions {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}
.result {
  margin-top: 12px;
}
</style>
