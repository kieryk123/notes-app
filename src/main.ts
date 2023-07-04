import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Button from './components/Button.vue'
import { marked } from 'marked'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.component('Button', Button)

marked.use({
  mangle: false,
  headerIds: false
})

app.mount('#app')
