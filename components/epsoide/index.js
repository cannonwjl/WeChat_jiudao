// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //在组件属性列表里可以用向下面这么初始化数字
    //但是data里不行
    index: {
      type: String,
      //newVal 是 index值 oldval是改变的值  changedPath是一个对象
      //observer在属性改变是会调用 这里
      observer: function(newVal, oldVal, changedPath) {
        //  注意防范内存泄漏  RangeError: Maximum call stack size exceeded 这个错误是内存泄漏的错误 当接受到是数字 显示08 在前面补零但是格式type改为String

        let Val = newVal < 10 ? '0' + newVal : newVal;
        //  if(Val<10)
        //  {
        //    Val="000"+Val;
        //  }
        this.setData({
          _index: Val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //将月份转换为文字
    months: [
     '十二月', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    //data 下初始化不要用 Number和String 用了之后会默认为函数 
    //year: Number,
    //  month:String
    //注意：properties和data下不要用相同的名字的命名  一个会覆盖另一个
    year: 0,
    month: '',
    //这里在data下创建新的字符串用了保存值使其正常显示
    _index: ''
  },

  attached: function() {

    //data 下初始化不要用 Number和String 用了之后会默认为函数 
    //小程序会把 data和properties合并成一个javascript对象
    console.log(this.properties.index);
    console.log(this.data);
    //获取月份
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    this.setData({
      year: year,
      month: this.data.months[month]
    })

  },
  /**
   * 组件的方法列表
   */
  methods: {

    onshow: function() {
      console.log(year);

    }

  }
})