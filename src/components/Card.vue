<script setup>
defineOptions({
  name: 'CardWrapper'
})

defineProps({
  bgColor: {
    type: String,
    default: 'gray'
  }
})
</script>

<template>
  <div :class="`bg-${bgColor}-100 p-6 rounded-lg shadow-md`">
    <slot />
  </div>
</template>
