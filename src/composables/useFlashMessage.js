import {ref, watchEffect} from "vue";
const flashMessage = ref('')

const getFlashMessage = function (){
    return flashMessage
}
const setFlashMessage = function (string, timer){
    watchEffect((onInvalidate) =>{
        if (typeof string === 'string'){
            flashMessage.value = string
        }

        const clearingMessage = setTimeout(()=>{
            flashMessage.value = ''
            console.log('log')
        },timer)
        onInvalidate(() => clearTimeout(clearingMessage))
    })

}
export default ({getFlashMessage, setFlashMessage})