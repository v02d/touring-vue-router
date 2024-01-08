import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFlashMessageStore = defineStore('counter', () => {

  const flashMessage = ref('')

  function setFlashMessage(message) {
    flashMessage.value = message
  }

  function getFlashMessage(){
    return flashMessage.value
  }

  return { setFlashMessage, getFlashMessage }
})
