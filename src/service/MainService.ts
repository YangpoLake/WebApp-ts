import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { token } from '@/utils/storage'

// create an axios instance
const service = axios.create({
  baseURL: "http://132.232.119.246:10233/api", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 120000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config: any) => {
    // do something before request is sent

    if (token.get()) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = token.get()
    }
    return config
  },
  (error: any) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response: any) => {
    const res = response ? response.data : {};

    // if the custom code is not 20000, it is judged as an error.
    if (res.code > 199 && res.code < 300) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res || {}
    }
  },
  (error: any) => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
