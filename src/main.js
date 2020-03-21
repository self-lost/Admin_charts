import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import jquery from 'jquery';
import './assets/icon-font/iconfont.css'

Vue.prototype.$echarts = echarts;

Vue.prototype.$ = jquery;

Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
