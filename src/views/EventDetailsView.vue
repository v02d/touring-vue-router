<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p> {{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <p v-else>fetching event</p>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import EventService from "../services/EventService.js";
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const router = useRouter();

const event = ref(null)

onMounted(() => {
  EventService.getEvent(props.id)
      .then((response) => {
        event.value = response.data
      })
      .catch((error) => {
        router.push('/404')
      })
})
</script>
<style scoped>

</style>