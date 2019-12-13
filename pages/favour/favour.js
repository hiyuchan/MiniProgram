// pages/goods/goods.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    atteList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var datas = wx.getStorageSync("atteList");
    this.setData({
      atteList: datas,
    })
  },
  onShow:function(){
    var datas = wx.getStorageSync("atteList");
    this.setData({
      atteList: datas,
    })
  }
})