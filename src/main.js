import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';
import VueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(VueSmoothScroll)
Vue.config.productionTip = false

Vue.use(Vuex);
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
