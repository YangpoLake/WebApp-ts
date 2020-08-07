import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import MainApi from './service/MainApi';
import ElementUI from 'element-ui';
import enlocale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/lang'
import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.prototype.$mainApi = new MainApi();

Vue.use(ElementUI, { enlocale })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
