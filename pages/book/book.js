import{
  BookModel
} from '../../models/book.js'

let bookModel=new BookModel()

// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //纯粹callback   回调地狱 return
      //promise  代码风格  多个异步等待合并。
      //async await ES2017 小程序 不支持
      //一次调用 多次调用服务器API 链式调用 3个API API1 API2 API3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    bookModel.getHotList()
    .then(res=>{
      console.log(res);
      return bookModel.getMyBookCount()
    })
    .then(res=>{
      console.log(res)
      return bookModel.getMyBookCount()
    })
    .then(res=>{
      console.log(res)
      return bookModel.getMyBookCount()
    })



    //以下为Promise回调地狱 错误的调用不建议
  //  const hotList=bookModel.getHotList()
  //  hotList.then(res=>{
  //    console.log(res)
  //   bookModel.getMyBookCount()
  //     .then(res=>
  //     {
  //       console.log(res)
  //     }
  //     )
  //  })
   
   
   
   
   //以下为练习代码 无具体作用 为了说明Promise
     //Promise 对象 函数
     //对象 保存状态 函数 
     //Promise 第一步
     //异步代码 写在 Promise 函数中 第二步
     const promise =new Promise((resolve,reject)=>{
       //pending fulfilled rejected 
       //进行中   已成功    以失败   
       //以上new的时候 就是在进行中的状态 一旦到了后俩个状态就凝固了 不可能改变
       //完成后 可以随时通过promise拿到结果
        
        //wx.getSystemInfo 获取系统信息
        wx.getSystemInfo({
          success: function(res) {
              resolve(res)
          },
          fail:(error)=>
          {
              reject(error)
          }
        })

     })
     //第三步 打印消息
     promise.then((res)=>{
        console.log(res) 
     },(error)=>{
        console.log(error)
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})