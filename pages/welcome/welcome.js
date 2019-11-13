// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:"hiyu",
    names:[
      { name: "hiyu", age: 18, gender: "男" },
      { name: "苦笑", age: 18, gender: "男" },
      { name: "snail", age: 5, gender: "女" },
    ],
    userInfo:{},
    isShow:true,
  },
  onGotUserInfo: function (e) {
    let that = this;
    console.log(e.detail.userInfo)
    that.setData({
      userInfo: e.detail.userInfo,
      isShow: false,
    })
  }, 
  goin() {
      wx.switchTab({
        url: '../index/index'
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    let that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              that.setData({
                userInfo:res.userInfo,
                isShow:false,
              })
            }
          })
        }
      }
    })
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