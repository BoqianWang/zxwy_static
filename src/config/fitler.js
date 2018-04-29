/**
 * 过滤器 处理字符串
 * author   wzh
 * created  2018-4-25 18:02
 * update   2018-4-25
 */


import Vue from 'vue';
//引入工具库
import '../assets/js/Tools.js';

//日期格式
Vue.filter('timeformat', function(value, format) {
	value /= 1000;
	return Tools.TimestampToDate(format, value);
})