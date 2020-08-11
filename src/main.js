import Vue from 'vue'

import Cookies from 'js-cookie'
import WOW from 'wow.js/dist/wow.js'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import BootstrapVue from 'bootstrap-vue'
import VueSilentbox from 'vue-silentbox'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(BootstrapVue)
Vue.use(VueSilentbox)
Vue.use(VueAwesomeSwiper)

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'
import 'slick-carousel/slick/slick.css'

import * as filters from './filters' // global filters

import VueRouter from 'vue-router'

Vue.use(VueSilentbox)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)

import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/fontawesome-all.min.css'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'
import 'slick-carousel/slick/slick.css'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    new WOW().init()
  },
  render: h => h(App)
})
