// 数据层
import { HTTP } from '../../../utils/http.js'

// 通过extends继承父类（也可以实例化后调用）
class SearchModel extends HTTP {
  search(val, sCallBack) {
    //  封装后的请求调用
    this.request({
      url:"/book/search",
      method: "GET",
      data: {
        start:0,
        count:10,
        summary:0,
        q:val
      },
      success: res => {
        sCallBack(res)
      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
}
export { SearchModel }