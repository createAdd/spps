// components/booklist/booklistcon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      booklist:{
        type:JSON,
        observer(res) {
          this.setData({
            booklist:res
          })
        }
       
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      booklist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    xiang(ev){
      let id = ev.currentTarget.dataset.index
      // console.log(ev.currentTarget.dataset.index)
      this.triggerEvent('booklikes', {
        id
      }, {})
    }
  }
})
