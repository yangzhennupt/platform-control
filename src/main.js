import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import BaiduMap from 'vue-baidu-map';
import lodash from 'lodash';
import store from './store';
//import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import 'element-ui/lib/theme-chalk/index.css'
import "babel-polyfill";
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: '5SEWFRRyhHCR6tXL5LROUPWqD6B5FCGC'
  })
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$lodash = lodash;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');