// pages/index/link/link.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    linkUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      linkUrl:getApp().linkUrl
    })
  },
})