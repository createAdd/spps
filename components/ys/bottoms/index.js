// components/like/indezx.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { // 对外开放的
    like: {
      type: Boolean
    },
    count: {
      type: Number
    },
    footer: {
      type: String
    }
  },


  /**
   * 组件的初始数据
   */
  data: { // 内部数据
    like: true,
    yesSrc: 'images/like.png', // 只有组件内部用到，因此无需开放
    noSrc: 'images/like@dis.png' // 无需开放
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onLike() {
      let { like } = this.properties
      let { count } = this.properties
      count = like ? count - 1 : count + 1
      this.setData({
        count,
        like: !like
      })
      let behavior = this.properties.like ? 'like' : 'cancel';
      // 通知父组件 - 子传父
      this.triggerEvent('like', { // 自定义事件名称
        behavior
      })
    },
    up() {
      this.triggerEvent('ups', { // 自定义事件名称
        "name": "上一个"
      })
    },

    down() {
      this.triggerEvent('downs', { // 自定义事件名称
        "name": "下一个"
      })
    }
  }
})