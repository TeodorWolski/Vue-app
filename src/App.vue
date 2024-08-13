<script setup>
import { ref } from 'vue'

const name = ref('Vue 3')
const status = ref('active')
const tasks = ref([
  { id: 1, title: 'Task 1', isCompleted: true },
  { id: 2, title: 'Task 2', isCompleted: false },
  { id: 3, title: 'Task 3', isCompleted: true }
])

const changeStatus = () => {
  status.value = status.value === 'active' ? 'inactive' : 'active'
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">active</p>
  <p v-else-if="status === 'pending'">pending</p>
  <p v-else>inactive</p>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <input type="checkbox" :checked="task.isCompleted" />
      <span :class="{ 'is-completed': task.isCompleted }">{{ task.title }}</span>
    </li>
  </ul>

  <button @click="changeStatus">Change Status</button>
</template>
