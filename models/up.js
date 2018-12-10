// 数据层
import { HTTP } from '../utils/http.js'
// 通过extends继承父类（也可以实例化后调用）
class UpModel extends HTTP {
  up(artIndex, aCallBack) {
    let url = artIndex >= 2 ? "classic/" + artIndex + "/previous" : "classic/" + "2" + "/previous"
    //第二部
    let ke=artIndex
    if(ke==1){
      ke =1
    }else{
     ke= artIndex - 1
    }
    let key=`classic-${ke}`
    let classic=wx.getStorageSync(key)

    if(!classic){
      //请求数据
      this.request({
        url,
        method: "GET",
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
export { UpModel }