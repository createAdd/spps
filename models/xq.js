// 数据层
import { HTTP } from '../utils/http.js'

// 通过extends继承父类（也可以实例化后调用）
class XiangModel extends HTTP {
  xiang(listId,sCallBack) {
    // console.log(listId)
    let url ="book/"+listId+"/detail"
    //  封装后的请求调用
    this.request({
      url,
      method: "GET",
      success: res => {
        // console.log(res)
        sCallBack(res)
        
      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
}
class Pinglun extends HTTP {
  ping(aId,aValue, sCallBack) {
    // console.log(listId)
    console.log(aId,aValue)
    //  封装后的请求调用
    this.request({
      url:"book/add/short_comment",
      method: "POST",
      data:{
        book_id:aId,
        content:aValue
      },
      success: res => {
        console.log(res)
        sCallBack(res)

      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
}
class XiangpingModel extends HTTP {
  pings(listId, sCallBack) {
    // console.log(listId)
    let url = "book/" + listId + "/short_comment"
    //  封装后的请求调用
    this.request({
      url,
      method: "GET",
      success: res => {
        // console.log(res)
        sCallBack(res)

      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
}
class XianglikeModel extends HTTP {
  xianglike(listIdr, sCallBack) {
    // console.log(listId)
    let url = "book/" + listIdr + "/favor"
    //  封装后的请求调用
    this.request({
      url,
      method: "GET",
      success: res => {
        // console.log(res)
        sCallBack(res)

      }
    })
    // return  // return出结果会是空的，因为request是异步函数
  }
}
export { XiangModel, XiangpingModel, XianglikeModel, Pinglun }