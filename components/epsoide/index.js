// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //在组件属性列表里可以用向下面这么初始化数字
    //但是data里不行
     index:{
       type:Number,
      //  onbserver:function(){
      //    this.setData({
      //      _index: index
      //    })
      //  }
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //data 下初始化不要用 Number和String 用了之后会默认为函数 
    //year: Number,
    //  month:String
    //注意：properties和data下不要用相同的名字的命名  一个会覆盖另一个
       year: 0,
    month:''
  },
 
 attached:function(){
    //data 下初始化不要用 Number和String 用了之后会默认为函数 
    //小程序会把 data和properties合并成一个javascript对象
   console.log(this.properties.index);
   console.log(this.data);
  
  
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
