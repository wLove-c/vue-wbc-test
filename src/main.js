import Vue from 'vue'
import App from './App.vue'
import vueWbcTest from './lib/index.js'
Vue.use(vueWbcTest)
new Vue({
  el: '#app',
  render: h => h(App)
})
