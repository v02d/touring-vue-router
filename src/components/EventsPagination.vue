<template>
  <div class="pages">
    <router-link v-for="pageNumber in pagination" :to="{name: 'Events', query: {page: pageNumber}}">
      {{pageNumber}}
    </router-link>
  </div>
</template>

<script setup>
import {computed} from "vue";
const props = defineProps(['totalPages', 'page'])

const pagination = computed(()=>{
  const sidePages = 1
  const range = []
  const start = Math.max(1, props.page - sidePages)
  const end = Math.min(props.page + sidePages, props.totalPages)

  for (let i = start; i <= end; i++){
    range.push(i)
  }
  if (start > 1){
    range.unshift(1)
  }
  if (end < props.totalPages){
    range.push(props.totalPages)
  }
  return range
})
</script>

<style scoped>
.pages{
  display: flex;
  width: 290px;
  justify-content: center;
  gap: .25rem;
  margin-bottom: 2rem;
}
.pages a{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  min-width: 2rem;
  border: 1px solid #39495c;
}
.pages a{
  text-decoration: none;
  color: #2c3e50;
}
</style>