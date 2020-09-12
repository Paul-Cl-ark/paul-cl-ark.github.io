import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

require('@/assets/main.sass')

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)

const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)

app.mount('#app')
