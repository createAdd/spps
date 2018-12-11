// components/booklist/search/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    val: {
      type: String
    },
    is: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hot:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(){
      wx.redirectTo({
        url: '../../../pages/booklist/index/index'
      })
    },
    search(ev){
      let val = ev.detail.value
      this.triggerEvent('search', {
        val
      })
    },
    kong(){
      console.log(1)
    }
    
  }
})
