import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from
'../../models/like.js'
//module HTTP;
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,//理解模块数据更新 //
   // test:1,
    like:false,
    first:true,
    latest:false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("运行到了onLoak了");

//异步与同步 getlatest
//数据更新
//this.data.test=2 //对于data下的test数据更新不能这么用
//数据更新，storage
    classicModel.getLatest((res)=>{
      console.log(res);
     // this._getLikeStatus(res.id, res.type);
    this.setData({
      classic:res,
     // test:3 
    })
    // latestClassic latesIndex currentClassic currentIndex
      console.log(this.data.classic);
      console.log(this.data);
})


   

    //此函数移动到了 models/classic.js方法下 2018-8-26
    // http.request({
    //   url:"/classic/latest",
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })
      //  wx.request({
      //    url: 'http://bl.7yue.pro/v1/classic/latest',
      //    header:{
      //      appkey:"pe6lyAeHjpf7FrQf"
      //    },
      //    //箭头函数
      //    success:(res)=>{
      //      console.log(this.data.test)
      //    }
      //  })
  },

  onLike: function (event) {
     
     //通过打印 id 值 和 category 值 来查看是否获取到  打印后发现无定义 知道了是值没获取到 通过对数组分析知道是 classic内还有一层
     //这里是this.data.classic.data.id;而不是视频中的this.data.classic.id;
    let id=this.data.classic.data.id;
    let category=this.data.classic.data.type;
    console.log(event);
    let behavior=event.detail.behavior;
    
    console.log("behavior is " + behavior + " id is " + id + " type is " + category );
    likeModel.like(behavior, id, category);
  },
//========================================================
  onNext:function(event)
  {
      console.log('this is onNext');
      this._updateClassic('next');
  },


  onPrevious:function(event){
     console.log('this is onPrevious');
     this._updateClassic('previous');
  },


//私有函数放到最下面
  _updateClassic: function (nextOrPrevious) {
    let index = this.data.classic.data.index;

    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.data.index),
        first: classicModel.isFirst(res.data.index)
      })
      //  console.log(latest + " " + first);
    })
  },

  //=====================================================
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