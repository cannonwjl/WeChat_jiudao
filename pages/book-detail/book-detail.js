// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book.js'
import {
  LikeModel
} from '../../models/like.js'
const likeModel = new LikeModel()
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    //detail: [],
  
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //id
    const bid = options.bid;
    console.log(bid);
    const detail = bookModel.getDetail(bid);
    const comments = bookModel.getComments(bid);
    console.log(comments);
    const likeStatus = bookModel.getLikeStatus(bid);
    detail.then(res => {
      this.setData({
        book: res.data
      })
      console.log("this is detail:" + res.data);
    })
    comments.then(res => {
      this.setData({
        comments: res.data
      })
      console.log("this is comments:" + comments.count);
    })
    likeStatus.then(res => {
      this.setData({
        likeStatus: res.data.like_status,
        likeCount: res.data.fav_nums
      })

      console.log("this is likeStatus:" + likeStatus + " " + res.data.fav_nums);
    })
  },

  onLike(event) {
    const like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  },
  onFakePost(event) {
    this.setData({
      posting: true
    })
  },
  onCancel(event)
  {
    this.setData({
      posting:false
    })
  },
  onPost(event)
  {
    //console.log("this is onpost")
    const comment = event.detail.text || event.detail.value
    //const commentInput=event.detail.value
    console.log(comment)
    //console.log(commentInput)
    if(!comment)
    {
      return
    }
    if(comment.length>12)
    {
      wx.showToast({
        title: '短评最多12个字',
        icon:"none"
      })
      return 
    }
    bookModel.postComment(this.data.book.id,comment)
    .then(res=>{
      wx.showToast({
        title: '+ 1',
        icon:"none"
      }),              //unshift

    this.data.comments.unshift({
      //comment:comment, 以下是简写
       content:comment,
        nums: 1
      }),
      this.setData({
        comments:this.data.comments,
        posting:false
      })
    }
    )
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})