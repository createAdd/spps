// components/booklist/xq/inner/inner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      inners:{
        type:Object,
        observer(res){
          this.setData({
            list:res
          })
        }
      },
    plists: {
      type: JSON,
      observer(res) {
        // console.log(res)
        this.setData({
          pllist: res
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:{},
    pllist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
