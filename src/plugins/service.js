//encapsulate axios
import axios from 'axios'
import { Message, Loading } from 'element-ui'

const BaseURL = 'http://localhot:8899/'

let loading = null

export const Service = axios.create({
	baseURL: BaseURL,
	timeout: 10000,
	method: 'post',
  headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})

Service.interceptors.request.use(config => {
	//can add token here
	//const token = store.state.token;
  //config.headers.common['Authorization'] = token
	loading = Loading.service({
		lock: true,
		text: 'loading...',
		background: 'rgba(0, 0, 0, 0.5)'
	})
	return config
}, error => {
	return Promise.reject(error)
})

Service.interceptors.response.use(response => {
	loading.close()
	return response.data
}, err => {
	//console.log(err)
	// handle err here
	// if (error.response.status) {
	// 	switch (error.response.status) {
	// 		//未登录的处理
	// 		case 401:
	// 		//权限不足的处理
	// 		case 403:
	// 		break;
	// 		//404请求不存在的处理
	// 		case 404:
	// 		break;
	// 		//默认处理
	// 		default:
	// 	}
	// 	return Promise.reject(error.response)
	// }
	Message({
		message: `network error ${err.message}`,
		type: 'error',
		duration: 3000
	})
	loading.close()
	return Promise.reject(error)
})

//mount axios.all and axios.spread
Service.all = axios.all
Service.spread = axios.spread

