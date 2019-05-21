import Vue from 'vue'
import App from './App.vue'
import HelloWorld from '../../components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.component("hello-world",HelloWorld)

Vue.config.errorHandler = (err, vm, info) => {
  alert("vue.config.errorHandler 内でエラーが発生しました。")
  console.log(err,vm,info);
};

window.addEventListener("error", event => {
  alert("window.onerror 内でエラーが発生しました。")
  console.log(event.error);
});

window.addEventListener("unhandledrejection", event => {
  alert("window.onunhandledrejection 内でエラーが発生しました。")
  console.log(event.reason);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
