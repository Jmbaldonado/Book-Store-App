
import './assets/css/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "@/router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBarsStaggered, faBlog, faCartShopping, faXmark} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const app = createApp(App)

library.add(faBlog)
library.add(faBarsStaggered)
library.add(faXmark)
library.add(faCartShopping)


app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('swiper', Swiper)
app.component('swiper-slide', SwiperSlide)

app.mount('#app')
