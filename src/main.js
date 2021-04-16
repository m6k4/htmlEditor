import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ElementUI from 'element-ui';
import 'font-awesome/css/font-awesome.css';
import router from './router';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
