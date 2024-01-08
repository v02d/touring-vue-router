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
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() =>{
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetails'
  })
}
</script>
<style scoped>

</style>