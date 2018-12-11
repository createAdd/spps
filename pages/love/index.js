// pages/love/index.js
import { Love } from "../../models/love.js"

let love = new Love()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{},
    types: ['']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    love.getDataLists((res) => {
      this.setData({
        dataList: res
      })
      console.log(this.data.dataList)
      for(let i in res){
        // console.log(res[i])
        if (res[i].type==100) {
          this.setData({
            types: "电影"
          })
        } else if (res[i].type==200) {
          this.setData({
            types: "音乐"
          })
        } else if (res[i].type==300) {
          this.setData({
            types: "句子"
          })
        }
        console.log(this.data.types)
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