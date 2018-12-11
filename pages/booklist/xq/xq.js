// pages/booklist/xq/xq.js
import { XiangModel } from "../../../models/xq.js"
import { XiangpingModel } from "../../../models/xq.js"
import { XianglikeModel } from "../../../models/xq.js"
import { LikeModel } from "../../../models/like.js"
import { Pinglun } from "../../../models/xq.js"

let xiangq = new XiangModel()
let ping = new XiangpingModel()
let xianglikes = new XianglikeModel()
let likeMo = new LikeModel()
let pings = new Pinglun()



const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    plist: [],
    like: {},
    id: '',
    value:""
  },
  likeClick(ev) {
    console.log(ev)
    let behavior = ev.detail.behavior
    console.log(behavior)
    let id = this.data.list.id
    let type = 400
    likeMo.like(behavior, id, type)
    // console.log(behavior, id, type) 
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    let id = options.id
    console.log(id)
    this.setData({
      id: id
    })

    xiangq.xiang(id, res => {
      // console.log(res)
      this.setData({
        list: res
      })
    })
    ping.pings(id, res => {
      // console.log(res)
      this.setData({
        plist: res.comments
      })
      // console.log(this.data.plist)
    })
    xianglikes.xianglike(id, res => {
      console.log(res)
      this.setData({
        like: res
      })
    })
  },
  search(ev) {
    console.log(ev)
    let value = ev.detail.value
    let id = this.data.id
    console.log(id)
    pings.ping(value, id, res => {
      console.log(res)
      if(res.msg=="ok"){
        wx.showToast({
          title: '评论成功'
        })
        // console.log("评论成功")
        this.setData({
          value:'请输入内容'
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})