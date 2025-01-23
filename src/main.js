import { createApp } from 'vue'

import App from './App.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import '@/styles/mainpage.scss'
import 'element-plus/dist/index.css'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.component('QuillEditor', QuillEditor)
app.use(pinia)
app.mount('#app')
