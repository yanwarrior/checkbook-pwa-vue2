import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { store } from './store/store'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
