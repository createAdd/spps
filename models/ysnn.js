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
        wx.setStorageSync(this._getKey(res.index), res)
          
        sCallBack(res)

      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
  //第一步：按照规则生成key值
  _getKey(artIndex) {
    let key = `classic-${artIndex}`
    return key
  }
}
export { IndexModel }