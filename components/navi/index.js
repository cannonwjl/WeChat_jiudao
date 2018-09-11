// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //组件下不能初始化数值
      title:String,
      first:Boolean,
      latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
      disLeftSrc:'images/triangle.dis@left.png',
      leftSrc:'images/triangle@left.png',
      disRightSrc:'images/triangle.dis@right.png',
      rightSrc:'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //自定义函数
    //1在模板里使用监听函数 及设置onLeft 和 onRight 函数
    //2在内部设置 this.triggerEvent('left',{},{});设置自定义监听
    //3在classic.wxml里引用 bind:left="onLeft"  和 bind：right="onRight"
    //注意，以上出来监听函数名字其它必须小写
    onLeft:function(event)
   {
     if(this.properties.latest)
     {
       this.triggerEvent('left', {}, {});
       console.log("this is onLeft function");
     }
     
   },
    
    onRight:function(event){
      if (this.properties.first) {
     this.triggerEvent('right',{},{});
        console.log("this is onPrevious function");
      }
   }
  }
})
