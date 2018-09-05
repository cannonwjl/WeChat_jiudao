// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //在组件属性列表里可以用向下面这么初始化数字
    //但是data里不行
     index:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
      year:7,
      month:String
  },

  /**
   * 组件的方法列表
   */
  methods: {
  
     onshow:function(){
       console.log(year);
     }
  }
})
