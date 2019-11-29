// pages/goods/goods.js
var now = new Date();
var timestamp = String(now.getFullYear()) + String(now.getMonth() + 1) + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headline: [],
    newsList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `https://route.showapi.com/967-1?showapi_appid=114344&showapi_timestamp=${timestamp}&showapi_sign=f33852f7a1e445f890fc5a2b3c7fd17a`,
      success: ((res) => {
        console.log(res)
        this.setData({
          headline: res.data.showapi_res_body.Headline,
        })
      })
    })
  },
  tabTitle(e) {
    console.log(e.target.dataset.url)
    var href = e.target.dataset.url;
    wx.navigateTo({
      url: './newsDetail/newsDetail?href=' + href,
    })
  }
})