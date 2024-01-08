<script setup>
import EventCard from "@/components/EventCard.vue";
import EventsPagination from "@/components/EventsPagination.vue";
import EventService from "@/services/EventService.js";
import {ref, onMounted, computed, defineProps, watchEffect} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const props = defineProps(['page'])

const totalEvents = ref(0)
const events = ref(null)
const totalPages =  computed(() => 15 || Math.ceil(totalEvents.value / 2))
const hasNextPage = computed(() => page.value < totalPages.value)
const page = computed(() => props.page)

onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
        .then((response) => {
          events.value = response.data
          totalEvents.value = response.headers['x-total-count']
        })
        .catch((error) => {
          router.push({name: 'NetworkError'})
        })
  })
})
</script>

<template>
  <main>
    <h1>Events For Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event"/>
      <div class="pagination">
        <router-link :to="{name: 'Events', query: {page: page - 1}}" rel="prev" v-if="page !== 1">
         &#60 Prev page
        </router-link>
        <router-link :to="{name: 'Events', query: {page: page + 1}}" rel="next" v-if="hasNextPage">
          Next page &#62
        </router-link>
      </div>
      <EventsPagination :page="page" :totalPages="totalPages"></EventsPagination>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination{
  display: flex;
  width: 290px;
}
.pagination{
  margin-bottom: 1rem;
}
.pagination a, .pages a{

  text-decoration: none;
  color: #2c3e50;
}
.pagination a{
  flex: 1;
}

</style>
