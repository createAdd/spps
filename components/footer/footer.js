// components/footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num:"0",
    yesimg:[ 'images/1.jpg',"images/5.jpg","images/6.jpg"], // 只有组件内部用到，因此无需开放
    noimg: ['images/4.jpg',"images/2.jpg","images/3.jpg"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    active(ev){
      if (ev.currentTarget.id==="0"){
        wx.setStorage({
          key:"num",
          data:"0"
        })
        // this.data.num=
        wx.redirectTo ({
          url: '/pages/ysnn/ysnn'
        })
      } else if (ev.currentTarget.id === "1"){
        wx.setStorage({
          key: "num",
          data: "1"
        })
        wx.redirectTo ({
          url: '/pages/booklist/index/index',
        })
      } else if (ev.currentTarget.id === "2"){
        wx.setStorage({
          key: "num",
          data: "2"
        })
        wx.redirectTo ({
          url: '/pages/love/index',
        })
      }
    }
  },
  ready(){
    let e=wx.getStorageSync("num");
    this.setData({
      num:e
    })
  }
})
