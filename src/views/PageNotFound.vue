<template>
  <h1>Oops!</h1>
  <p>The {{ resource }} you're looking for is not here.</p>
  <router-link :to="{name: 'Events'}">Back to the home page</router-link>
</template>

<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page',
  }
})
</script>

<style scoped>

</style>