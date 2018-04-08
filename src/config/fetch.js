import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from '../router/router';
var router = new VueRouter(routerConfig);
Vue.use(VueRouter);
// axios 配置
axios.defaults.timeout = 1000000;    //响应时间
// axios.defaults.withCredentials=true;
// axios.defaults.headers.common['faker'] = '123333';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://192.169.18.77:8081/zxwy-operator'; //本地配置接口地址
// axios.defaults.baseURL = 'http://test.zhongxiang51.com/zxwy-operator'; //测试配置接口地址
axios.defaults.baseURL = 'http://operator.zhongxiang51.com'; //正式配置接口地址
//添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data);
    // }
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
    // console.log(sessionStorage.token);
    if(localStorage.token){
        config.headers['token'] = localStorage.token;
    }
    return config;
}, (error) => {
    alert("错误的传参");
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) =>{
// 	//对响应数据做些事
//     if(res.data.code==0){
//         // _.toast(res.data.msg);
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     // _.toast("网络异常", 'fail');
//     // console.log('网络异常');
//     return Promise.reject(error);
// });

/**
 *
 * POST 请求方式
 * @param {string} url     请求URL
 * @param {object} params  请求参数
 * @returns
 */

export default {
    //fetchPost  请求方式
    fetchPost: function(url, params) {
       console.log(params);
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                  console.log(response.data);
                    if(response.data.code==0){
                      resolve(response.data);
                    }else {
                      Message.error(response.data.msg);
                      if(response.data.code==999){
                        router.replace({
                          path: '/'
                        })
                      }else{
                        reject(response.data.code);
                      }
                    }

                })
                .catch((error) => {
                  Message.error(String(error));
                  reject(error)
                })
        })
    },


    //GET 请求方式
    fetchGet: function(url, params) {
      console.log(params);
      if(sessionStorage.token){
        params.token = sessionStorage.token;
      }
      console.log(params);
        return new Promise((resolve, reject) => {
            axios.get(url, {
                    params: params
                })
                .then(response => {
                    if(response.data.code==0){
                      resolve(response.data);
                    }else {
                      Message.error(response.data.msg);
                      reject(response.data.code);
                    }
                })
                .catch((error) => {
                      Message.error(String(error));
                    reject(error)
                });
        })

    }
}


// global.bird = "https://bird.ioliu.cn/v1/?url=";
//
// //外网测试环境 api代理
// const Proxy = "https://bird.ioliu.cn/v1/?url=";
//
// //定义api 接口
// global.apiurl = {
//     zhihu: function() {
//         var zh = Proxy + "https://zhuanlan.zhihu.com/api/columns/wxyyxc1992";
//     }
// }
