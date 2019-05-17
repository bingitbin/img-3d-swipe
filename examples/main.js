import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ImgSwipe from '../packages'
import a from '../dist/index.umd.js'

console.log(a)

Vue.config.productionTip = false
console.log(ImgSwipe)

Vue.use(ImgSwipe)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
