import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
