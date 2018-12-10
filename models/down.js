// 数据层
import { HTTP } from '../utils/http.js'
// 通过extends继承父类（也可以实例化后调用）
class DownModel extends HTTP {
  down(artIndexs, aCallBack) {
    let url = artIndexs <= 2 ? "classic/" + artIndexs + "/next" : "classic/" + 7 + "/next"
    // 第二部
    let ke = artIndexs
    if (ke == 8) {
      ke = 8
    } else {
      ke = artIndexs + 1
    }
    let key = `classic-${ke}`
    let classic = wx.getStorageSync(key)

      if(!classic){
        this.request({
          url,
          success: (res) => {
            wx.setStorageSync(key, res)
            aCallBack(res)
          }
        })
      }else{
        aCallBack(classic)
      }
          
    // return  // return出结果会是空的，因为request是异步函数
  }
}
export { DownModel }