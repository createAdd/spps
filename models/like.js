// 数据层
import { HTTP } from '../utils/http.js'

// 通过extends继承父类（也可以实例化后调用）
class LikeModel extends HTTP {
  like(behavior,artId,caregory) {
    let url=behavior=="like"?"like":"like/cancel"
    console.log(behavior)
    //  封装后的请求调用
    this.request({
      url,
      method:"POST",
      data:{
        art_id:artId,
        type: caregory
      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
}
export { LikeModel }