<script>
export default {
  data() {
    return {
      name: 'Hello Vue 3',
      status: 'active',
      tasks: [
        { id: 1, title: 'Task 1', isCompleted: true },
        { id: 2, title: 'Task 2', isCompleted: false },
        { id: 3, title: 'Task 3', isCompleted: true }
      ],
      link: 'https://www.google.com'
    }
  },
  methods: {
    changeStatus() {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
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
  <a :href="link">Google</a>
  <button @click="changeStatus">Change Status</button>
</template>
