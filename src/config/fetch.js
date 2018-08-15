import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConfig from '../router/router';
Vue.use(VueRouter);
var router = new VueRouter(routerConfig);
//服务器api接口列表
let apiServer = {
    baseApi: 'http://operator.zhongxiang51.com/',
    travleApi: 'https://opt.zhongxiang51.com/',

    // baseApi: 'http://112.74.84.94:8081/zxwy-operator/',
    // travleApi: 'http://test.zhongxiang51.com/zx51-manager/'
}

window.apiServer = apiServer;

// axios 配置
axios.defaults.timeout = 1000000;    //响应时间


//添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事

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

/**
 *
 * POST 请求方式
 * @param {string} url     请求URL
 * @param {object} params  请求参数
 * @returns
 */

export default {
    //fetchPost  请求方式
    fetchPost: function(url, params, type = 'baseApi') {
        url = apiServer[type] + url;
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    if(response.data.code == 0){
                      resolve(response.data);
                    }else {
                      Message.error(response.data.msg);
                      if(response.data.code == 999){
                           localStorage.token = ''
                        // location.reload();
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
    fetchGet: function(url, params, type = 'baseApi') {
        url = apiServer[type] + url;
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

    },
    //基础接口
    baseURL: apiServer['baseApi']
}
