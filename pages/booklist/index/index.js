// pages/booklist/index/index.js
import { BooklikeModel } from "../../../models/booklike.js"
let booklikes = new BooklikeModel()

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklike:[]
  },
  booklist(ev){
    // console.log(ev.detail.id)
    let ids = ev.detail.id
    wx.navigateTo({ 
      url: "/pages/booklist/xq/xq?id="+ids
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    booklikes.booklike((res)=>{
      // console.log(res)
      // console.log(res)

      this.setData({
        booklist:res
      })
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