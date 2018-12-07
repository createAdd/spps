// 数据层
import { HTTP } from '../utils/http.js'
// 通过extends继承父类（也可以实例化后调用）
class UpModel extends HTTP {
  up(artIndex, aCallBack) {
    let url = artIndex >= 2 ? "classic/" + artIndex + "/previous" : "classic/" + "2" + "/previous"
    //第二部
    let key = this._getKey(artIndex - 1)
    console.log(this._getKey(artIndex - 1))
    let classic=wx.getStorageSync(key)
    // console.log(classic)
    if(!classic){
      //请求数据
      this.request({
        url,
        method: "GET",
        success: (res) => {
          // console.log(this._getKey(res.index))
          wx.setStorageSync(this._getKey(res.index), res)
          aCallBack(res)
        }
      })  
    }else{
      aCallBack(classic)
    }



     
    // return  // return出结果会是空的，因为request是异步函数
  }
  //第一步：按照规则生成key值
  _getKey(artIndex) {
    let key = `classic-${artIndex}`
    return key
  }
}
export { UpModel }