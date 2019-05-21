import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.component("hello-world",HelloWorld)

new Vue({
  render: h => h(App),
}).$mount('#app')
