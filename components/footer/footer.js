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
    num:0,
    yesimg:[ 'images/1.jpg',"images/5.jpg","images/6.jpg"], // 只有组件内部用到，因此无需开放
    noimg: ['images/4.jpg',"images/2.jpg","images/3.jpg"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    active(ev){
      if (ev.currentTarget.id==="0"){
        this.setData({
          num:0
        })
        // this.data.num=
        wx.navigateTo({
          url: '../../pages/ysnn/ysnn'
        })
      } else if (ev.currentTarget.id === "1"){
        this.setData({
          num:1
        })
        wx.navigateTo({
          url: '../../pages/booklist/index',
        })
      } else if (ev.currentTarget.id === "2"){
        this.setData({
          num:2
        })
        wx.navigateTo({
          url: '../../pages/love/index',
        })
      }
    }
  }
})
