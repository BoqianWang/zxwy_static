// import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routerConfig from './router/router';
//引入过滤器
import './config/fitler.js';
// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/common.scss'


import api from './config/api';

// import axios from 'axios'
// Vue.prototype.$http = axios;
var router = new VueRouter(routerConfig)
Vue.use(VueRouter);
Vue.use(ElementUI);

//判断用户是否已经登录
router.beforeEach((to, from, next) => {
	if(to.fullPath == '/') {
		if(localStorage.token) {
			next('/manage');
		} else {
			next();
		}
	} else {
		if(localStorage.token) {
			next();
		} else {
			next('/')
		}
	}
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
