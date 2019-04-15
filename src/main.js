// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'   //引入iview
import 'iview/dist/styles/iview.css'    //使用iview css
import './theme/index.less';
import './css/common.css'

// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
//设置默认请求路径
axios.defaults.baseURL = 'http://localhost:8765/api'
// 将API方法绑定到全局
Vue.prototype.$axios = axios

Vue.use(iView, {
  transfer: true,
  size: 'large'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
