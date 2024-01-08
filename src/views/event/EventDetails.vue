<template>
  <p> {{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script setup>
const props = defineProps(['event'])

</script>
<style scoped>

</style>