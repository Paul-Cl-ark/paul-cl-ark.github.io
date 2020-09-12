import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

require('@/assets/main.sass')

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFontAwesome,
  faVuejs,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFontAwesome, faVuejs, faReact)

const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)

app.mount('#app')
