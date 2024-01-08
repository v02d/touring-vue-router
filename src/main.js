import {createApp, reactive} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)


const GStore = reactive({
    flashMessage: ''
})
app.provide('GStore', GStore)

app.mount('#app')
