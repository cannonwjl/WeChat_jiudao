// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      book:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    books111:100
  },
 
  methods: {
    onTap(event){
        const bid=this.properties.book.id;
        //console.log(bid);
        wx.navigateTo({
          url: `/pages/book-detail/book-detail?bid=${bid}`,
            //ES6新的写法相当与'/pages/book-detail/book-detail?bid='+bid,
        })//降低了组件的通用性
    }
    
  
  }
})
