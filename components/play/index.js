// components/ys/zhong/zhong.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cons: {
      type: String
    },
    imgs: {
      type: String
    },
    types: {
      type: String,
      observer(typesa) {
        // console.log(typesa)
        // let lic = newV
        let val = typesa == "100" ? "电影" : "" || typesa == "200" ? "音乐" : "" || typesa == "300" ? "句子" : ""
        
        var vals = val.split('')
        // console.log(vals)
        let va = []
        // for (var i in sddw) {
        // }
        for (var i in vals) {
          this.setData({
            types: vals[0],
            typess: vals[1]
          })
        }

      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    tyeps: "",
    tyepss: "",
    imgp:"./img/plays.png",
    imgw:"./img/play.png",
    imgt:false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    now() {
      // this.properties.sws = false
      // console.log(1)
      let that = this
        that.setData({
          imgt:false
        })
      this.triggerEvent('shows', { // 自定义事件名称
        
      })
      // }
    },
    tow() {
      // this.properties.sws = true
      // console.log(this.properties.sws)
      let that=this
      // if(this.data.showw==false){
      that.setData({
        imgt:true
      })
      // }
      this.triggerEvent('showp', { // 自定义事件名称

      })
    }
  }
})
