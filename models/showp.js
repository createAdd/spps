// 数据层
import { HTTP } from '../utils/http.js'

// 通过extends继承父类（也可以实例化后调用）

class Showp extends HTTP {
  getDataListt(artIndex, aCallBack) {
    //  封装后的请求调用
    // console.log(aCallBack)
    let url = "/classic/int:200/int:"+artIndex+""
    //第二部
    let ke = artIndex
    if (ke == 1) {
      ke = 1
    } else {
      ke = artIndex
    }
    let key = `classic-${ke}`
    let classip = wx.getStorageSync(key)

    if (!classip) {
      //请求数据
      this.request({
        url,
        method: "GET",
        success: (res) => {
          console.log(key)
          let key = `classic-${res.index}`
          wx.setStorageSync(key, res)
          sCallBack(res)
        }
      })
    } else {
      aCallBack(classip)
    }
    // return  // return出结果会是空的，因为request是异步函数
  }
}
export { Showp }