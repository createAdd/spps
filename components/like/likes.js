// components/like/likes.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number
    },
    likess: {
      type: Boolean,
     
      observer(newV, oldV, changedPath) {
        let lic=newV
        this.setData({
          like: lic
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      like: '',
      yeslike:"img/2.png",
      nolike:"img/1.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    likeclick(){
      let like=this.properties.like
      let count = this.properties.count
      count = like ?count-1:count+1
      this.setData({
        count,
        like:!like
      })
      let behavior=this.properties.like?"like":"cancel"
      this.triggerEvent('likes',{
        behavior
      },{})
    }
  }
})
