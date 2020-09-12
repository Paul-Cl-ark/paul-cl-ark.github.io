import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './plugins/font-awesome-library'

require('@/assets/main.sass')

const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)

app.mount('#app')
