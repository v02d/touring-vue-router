<script setup>
import {RouterLink, RouterView} from 'vue-router'
import UsefulRouterMethods from "@/components/UsefulRouterMethods.vue";
import {inject, ref} from "vue";

const GStore = inject('GStore')

const isRouterMethodsShown = ref(false)
const toggleRouterMethodsVisibility = () =>{
  isRouterMethodsShown.value = !isRouterMethodsShown.value
}
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <div class="flashMessage" v-if="GStore.flashMessage">{{GStore.flashMessage}}</div>
        <nav>
          <RouterLink :to="{name: 'Events'}">Events</RouterLink> |
          <RouterLink :to="{name: 'About'}">About</RouterLink>
        </nav>
        <button @click="toggleRouterMethodsVisibility">show router methods</button>
        <UsefulRouterMethods v-if="isRouterMethodsShown"></UsefulRouterMethods>
      </div>
    </header>
    <RouterView/>

  </div>
</template>

<style>
@keyframes yellow-fade{
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
.flashMessage {
  animation-name: yellow-fade;
  animation-duration: 3s;
}
#layout{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  padding: 30px;
}
nav a{
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active{
  color: #42b983
}
h2{
  font-size: 20px;
}
</style>
