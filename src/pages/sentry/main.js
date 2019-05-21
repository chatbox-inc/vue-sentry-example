import Vue from 'vue'
import App from './App.vue'
import HelloWorld from '../../components/HelloWorld.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://fd252f64eebb49a7905de99355e27e38@sentry.io/1464704',
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true,
    }),
  ],
});

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
  console.log(event);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
