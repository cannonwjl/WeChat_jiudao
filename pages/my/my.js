// pages/my/my.js
import {
  ClassicModel
} from "../../models/classic.js"
import {
  BookModel
} from "../../models/book.js"
import {
  promisic
} from "../../util/common.js"

let classicModel = new ClassicModel()
let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    bookCount: 0,
    classics: null
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userAuthorized()
    this.getMyBookCount()
    this.getMyFavor()
    //用户是否授权
    //  wx.getUserInfo({
    //    success:data=>{
    //      console.log(data)
    //    }
    //  })
    //弹窗 
    //询问是否授权
    //API
    //button 组件 UI 让用户主动电机Button
  },
  getMyFavor() {
    classicModel.getMyFavor(res => {
      this.setData({
        classics: res.data
      })
      //  console.log(classics)
    })
  },
  getMyBookCount() {
    bookModel.getMyBookCount()
      .then(res => {
        this.setData({
          bookCount: res.data.count
        })
      })
  },
  userAuthorized() {
    wx.getSetting({
      success: data => {
        console.log(data)
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              console.log(data)
              this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          console.log("err")
        }
      }
    })
  },
  onJumpToDetail(event) {
    console.log(event);
    const cid = event.detail.cid
    const type = event.detail.type
    wx.navigateTo({
      url: `/pages/classic-detail/classic-detail?cid=${cid}&type=${type}`
    })
  },
  getUserInfo(event) {
    //   console.log(event)
  },
  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    console.log(userInfo)
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
    }

  },
  onJumpToAbout(event) {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  onStud(event) {
    wx.navigateTo({
      url: '/pages/course/course',
    })
  },

  userAuthorized1() {
    promisic(wx.getSetting)()
      .then(data => {
        if (data.authSetting['scope.userInfo']) {
          return promisic(wx.getUserInfo)()
        }
        return false
      })
      .then(data => {
        if (!data) return
        this.setData({
          authorized: true,
          userInfo: data.userInfo
        })
      })
  },


  userAuthorized() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },
})