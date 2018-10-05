// pages/book-detail/book-detail.js
import{
  BookModel
}from '../../models/book.js'
import{
  LikeModel
} from '../../models/like.js'
const likeModel=new LikeModel()
const bookModel=new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
        comments:[],
        book:null,
        likeStatus:false,
        likeCount:0,
        detail:[],
        likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        //id
        const bid = options.bid;
        console.log(bid);
        const detail= bookModel.getDetail(bid);
        const comments=bookModel.getComments(bid);
        console.log(comments);
        const likeStatus=bookModel.getLikeStatus(bid);
        detail.then(res=>{
          this.setData({
            book:res.data
          })
          console.log("this is detail:" + res.data);
        })
        comments.then(res=>{
          this.setData({
            comments: res.data
          })
          console.log("this is comments:" + comments.count);
        })
        likeStatus.then(res=>{
          this.setData({
            likeStatus: res.data.like_status,
            likeCount: res.data.fav_nums
          })
         
          console.log("this is likeStatus:" + likeStatus + " " + res.data.fav_nums);
        })
  },

onLike(event){
  const like_or_cancel=event.detail.behavior
  likeModel.like(like_or_cancel,this.data.book.id,400)
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