import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

import "./assets/css/template.css"

import "bootstrap/dist/js/bootstrap.bundle.js"

createApp(App).use(router).mount('#app')
