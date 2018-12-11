// pages/ysnn/ysnn.js
import { IndexModel } from "../../models/ysnn.js"
import { LikeModel } from "../../models/like.js"
import { UpModel } from "../../models/up.js"
import { DownModel } from "../../models/down.js"
import { Shows } from "../../models/shows.js"
import { Showp } from "../../models/showp.js"

let index = new IndexModel()
let likeMo = new LikeModel()
let upMo = new UpModel()
let downMo = new DownModel()
let shows = new Shows()
let showp = new Showp()
const myaudio = wx.createInnerAudioContext();
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      datas:{},
      dww:""
  },
  likeClick(ev){
    // console.log(ev)
    let behavior=ev.detail.behavior
    let id = this.data.datas.id
    let type = this.data.datas.type
    likeMo.like(behavior,id,type)
    // console.log(behavior, id, type)
  },
  up(ev){
    // console.log(ev)
    let index = this.data.datas.index
    let behavior=ev.detail.name
    upMo.up(index,res=>{
      this.setData({
        datas: res
      })
    })
   
  },
  down(ev) {
    let indexs = this.data.datas.index
    // console.log(ev)
    downMo.down(indexs,res=>{
      this.setData({
        datas: res
      })
    })
    // upMo.up((res)=>{
    //   console.log(res)
    // })
  },
  shows(ev) {//暂停
    let indexs = this.data.datas.index
    console.log(indexs)
    shows.getDataListq(indexs, res => {
      console.log(res)
      myaudio.src = res.url
      myaudio.pause();
    })
  },
  
  showp(ev) {//播放
    let indexs = this.data.datas.index
    console.log(indexs)
    showp.getDataListt(indexs, res => {
      console.log(res)
      myaudio.src =res.url
      myaudio.play();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    wx.setStorageSync("num", "0")
    index.getDataList((res) => {
      // console.log(res)
    this.setData({
      datas:res
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
   * 
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