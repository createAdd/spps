// pages/ysnn/ysnn.js
import { IndexModel } from "../../models/ysnn.js"
import { LikeModel } from "../../models/like.js"

let index = new IndexModel()
let likeMo = new LikeModel()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      datas:{}
  },
  likeClick(ev){
    console.log(ev.detail.behavior)
    let behavior=ev.detail.behavior
    let {id,type}=this.data.datas
    likeMo.like(behavior,id,type)
    console.log(behavior, id, type)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    index.getDataList((res) => {
      // console.log(2222)
        this.setData({
          datas:res
        })
      console.log(this.data.datas)
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