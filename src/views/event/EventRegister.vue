<template>
  <p>Register for event here</p>
  <button @click="register">Register me</button>
</template>

<script setup>
import {useRouter} from "vue-router";
import {inject} from "vue";
const GStore = inject('GStore')
const router = useRouter()

const {event} = defineProps(['event'])

const register = () => {
  const stopTimeout = setTimeout(() =>{
    GStore.flashMessage = ''
  }, 3000)

  if (GStore.flashMessage) clearTimeout(stopTimeout)
  GStore.flashMessage = 'You are successfully registered for ' + event.title

  router.push({
    name: 'EventDetails'
  })
}
</script>
<style scoped>

</style>