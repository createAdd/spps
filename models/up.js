// 数据层
import { HTTP } from '../utils/http.js'
// 通过extends继承父类（也可以实例化后调用）
class UpModel extends HTTP {
  up(artIndex, aCallBack) {
    let url = artIndex >= 2 ? "classic/" + artIndex + "/previous" : "classic/" + "2" + "/previous"
    this.request({
      url,
      method: "GET",
      success: (res) => {
        // console.log(res)
        aCallBack(res)
      }
    })   
    // return  // return出结果会是空的，因为request是异步函数
  }
}
export { UpModel }