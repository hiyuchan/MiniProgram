// pages/index/comment/comment.js
var data_id = "";
Page({
  data: {
    showHot:false,
    commentList:[],
    hitList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    data_id = options.id;
    wx.request({
      url: `https://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=29873890&hot=1`,
      success:((res)=>{
        this.setData({
          commentList:res.data.data[0],
        })
        console.log(this.data.commentList)
      })
    })
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