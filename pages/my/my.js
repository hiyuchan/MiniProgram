// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=square&c=topic',
      success:((res)=>{
        console.log(res.data.square_list[0]);
        this.setData({
          menuList: res.data.square_list,
        })
      })
    })
  },
})