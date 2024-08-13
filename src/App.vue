<script setup>
import { ref, onMounted } from 'vue'

const name = ref('Vue 3')
const status = ref('active')
const tasks = ref([
  { id: 1, title: 'Task 1', isCompleted: true },
  { id: 2, title: 'Task 2', isCompleted: false },
  { id: 3, title: 'Task 3', isCompleted: true }
])
const newTask = ref('')
const changeStatus = () => {
  status.value = status.value === 'active' ? 'inactive' : 'active'
}

const addTask = () => {
  tasks.value.push({
    id: tasks.value.length + 1,
    title: newTask.value,
    isCompleted: false
  })
  newTask.value = ''
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => ({
      id: task.id,
      title: task.title,
      isCompleted: task.completed
    }))
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <h1>{{ name }}</h1>

  <form @submit.prevent="addTask">
    <label for="newTask"
      >Add Task

      <input type="text" id="newTask" v-model="newTask" />
    </label>
    <button type="submit">Add Task</button>
  </form>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      <button @click="removeTask(task.id)">Finish</button>
      <span :class="{ 'is-completed': task.isCompleted }">{{ task.title }}</span>
    </li>
  </ul>

  <button @click="changeStatus">Change Status</button>
  <p v-if="status === 'active'">active</p>
  <p v-else-if="status === 'pending'">pending</p>
  <p v-else>inactive</p>
</template>
