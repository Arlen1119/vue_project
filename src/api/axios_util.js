/**
 * @author [Arlen]
 * @email [xuewang_zhao@163.com]
 * @create date 2018-10-09 10:21:38
 * @modify date 2018-10-09 10:21:38
 * @desc axios配置文件，请求与返回的拦截都在此配置，全局的loading也可以在此进行设置，队友一些需要取消请求，或者额外设定的请求，单独引入axios
*/

import axios from 'axios';
import Qs from 'qs';
import store from '../store';

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
});

Axios.interceptors.request.use(
  config => {
    const _config = config;
    // const { method } = config;
    if (_config.method === 'post') {
      _config.data = Qs.stringify(_config.data);
      // console.log(config.data)
      _config.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded';
    }
    store.commit('setLoadingStatus', true);
    // loadingInstance = Loading.service({
    //     background: 'rgba(0，0，0)',
    //     text: '数据加载中',
    //     customClass: 'loading__class'
    // });
    // console.log(config)
    return _config;
  },
  error => Promise.reject(error),
);

Axios.interceptors.response.use(
  res => {
    const requestUrl = res.request.responseURL.match(/(\/{1}\w+\/\w+)+/)[0];
    console.log(res);
    store.commit('setLoadingStatus', false);
    // loadingInstance.close();
    if (res.data.code === '000000') {
      return Promise.resolve(res.data);
    } else if (res.data.code === '006000') {
      window.location.href = '/index.html';
    } else {
      return Promise.reject(res.data);
    }
  },
  error => {
    console.log(error);
    store.commit('setLoadingStatus', false);
    if (!error.response) {
      // loadingInstance.close();
      return Promise.reject(error);
    }
    const errRes = error.response;
    const { status, request } = errRes;
    // loadingInstance.close();
    // if (status == 404) return;
    const requestUrl = request.responseURL.match(/(\/{1}\w+\/\w+)+/)[0];
    const errorInfo = {
      requestUrl,
      message: '系统异常',
      status,
    };
    console.log(`————————————接口：${requestUrl}，请求错误————————————`);
    console.dir(error);
    console.table([errorInfo]);
    switch (parseInt(status, 10)) {
      case 401:
        // router.push('login');
        break;
      case 500:
        break;
      case 400:
        break;
      case 404:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  },
);

export default Axios;
