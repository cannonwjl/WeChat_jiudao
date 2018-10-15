// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null
  },
  getUserInfo() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userAuthorized()
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

  }
})