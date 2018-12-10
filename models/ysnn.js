// 数据层
import { HTTP } from '../utils/http.js'

// 通过extends继承父类（也可以实例化后调用）

class IndexModel extends HTTP {
  getDataList(sCallBack) {
    //  封装后的请求调用
    this.request({
      url: 'classic/latest',
      success: (res) => {
        // console.log(res.index)
        let key = `classic-${res.index}`
        wx.setStorageSync(key, res)
          
        sCallBack(res)

      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }

}
export { IndexModel }