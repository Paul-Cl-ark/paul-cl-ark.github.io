import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

require('@/assets/main.sass')

createApp(App).mount('#app')
