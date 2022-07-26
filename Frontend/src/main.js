import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store' // short for @/store/index
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import router from './router'
import Carousel3d from 'vue-carousel-3d';

createApp(App).use(router).use(store).use(Carousel3d).mount('#app')
