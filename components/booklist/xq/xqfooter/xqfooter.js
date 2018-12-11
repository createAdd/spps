// components/booklist/xq/xqfooter/xqfooter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number
    },
    value:{
      type:String,
      observer(res){
        console.log(res)
        this.setData({
          values:res
        })
      }
    },
    like:{
      type:Object,
      observer(res){
        this.setData({
          liker:res
        })
        console.log(res)

      }

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    liker:'',
    count:'',
    likes: false,
    yeslike: "img/2.png",
    nolike: "img/1.png",
    value:"",
    values:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    txt(ev){
      console.log(this)
      this.setData({
        value: ev.detail.value
      })
    },
    search(){
        let value=this.data.value
      this.triggerEvent('seach', {
        value
      }, {})
    },
    likeclick() {
      let likes = this.data.liker.like_status
      let count = this.properties.count
      console.log(this)
      count = this.data.likes ? count - 1 : count + 1
    
      this.setData({
        count,
        likes: !this.data.likes
      })
      

      console.log(this.data.likes)
      let behavior = this.data.likes ? "like" : "cancel"
      console.log(behavior)
      this.triggerEvent('likes', { 
        behavior
      }, {})
    }
  }
})
