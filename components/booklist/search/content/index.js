// components/booklist/search/content/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hot: {
      type: Array
    },
    search:{
      type:Array
    },
    is:{
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getval(ev){
      let val=ev._relatedInfo.anchorRelatedText
      this.triggerEvent('getval', {
        val
      })
    }
  }
})
