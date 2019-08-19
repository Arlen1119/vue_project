import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '../public/js/flexible.min';
import store from './store';
// 引入flexible,此文件已更改适用于PC端


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
