import Vue from 'vue'
import App from './App.vue'
import testlib from './plugin'
Vue.use(testlib)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
