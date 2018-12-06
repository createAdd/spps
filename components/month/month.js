// components/month/month.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    qk:{
      type:String,
      observer(newV,oldV,changedPath){
        let val=newV<10?"0"+newV:newV
        this.setData({
            index:val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:"",
    year:'',
    month:'',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached(){
    let date = new Date()
    let year=date.getFullYear()
    let month = date.getMonth()

    // console.log(month)
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  }
})
