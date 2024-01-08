<template>
  <div class="nav">
    <button @click="$router.push('/about')">About (path as string)</button>
    <button @click="$router.push({path: '/about'})">About (path with an object)</button>
    <button @click="$router.push({name: 'About'})">About (named path)</button>
    <button @click="$router.push({name: 'EventDetails', params: {id: 123}})">Event details (Dynamic segment)</button>
    <button @click="$router.push({name: 'Events', query: {page: 2}})">About (query parameter)</button>
  </div>
  <div class="nav">
    <button @click="$router.go(1)">forward in history</button>
    <button @click="$router.go(-1)">back in history</button>
  </div>
</template>

<script>
export default {
  name: "UsefullRouterMethods"
}
</script>

<style scoped>
.nav{
  display: flex;
  justify-content: center;
  gap: .25rem;
  margin-bottom: 1rem;
}
.nav button{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  min-width: 2rem;
  background-color: #ffffff;
  border: 1px solid #39495c;
}
.nav button{
  text-decoration: none;
  color: #2c3e50;
}
</style>