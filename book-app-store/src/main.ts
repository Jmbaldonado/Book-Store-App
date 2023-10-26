
import './assets/css/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "@/router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBarsStaggered, faBlog, faXmark} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App)

library.add(faBlog)
library.add(faBarsStaggered)
library.add(faXmark)


app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
