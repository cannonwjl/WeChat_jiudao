// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     like:{
       type:Boolean,
     },
    count:{
      type:Number,
    },
    readOnly:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      //数据绑定
      //三元表达式
      //封装性 开放性
      // 粒度
      //非常简单的功能 非常复杂的功能
      // count:990,
      // like:false,
      yesSrc:'images/like.png',
      noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event)
    {
     //自定义事件
        if(this.properties.readOnly)
        {
          return
        }
      // var /全局变量    let //局部变量
      var like=this.properties.like;
      var count=this.properties.count;
      like=!like;
      count=like?count+1:count-1;
       
       this.setData({
         like:like,
         count:count
       });
       //激活
      let behavior=this.properties.like?'like':'cancel';
      this.triggerEvent('like',{
        behavior:behavior
      },{});
     console.log(like);
    }
  }
})
