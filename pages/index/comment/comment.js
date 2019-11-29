// pages/index/comment/comment.js
var data_id = "";
Page({
  data: {
    showHot:false,
    commentList:[],
    hitList:[],
    page: 2,//第二页开始发页数参数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请稍后',
      mask: true,
    });
    data_id = options.id;
    wx.request({
      url: `https://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=${data_id}&hot=1`,
      success: ((res) => {
        console.log(res.data)
        this.setData({
          hotList:res.data.hot,
          commentList:res.data.data,
          showHot: res.data.hot.length?true:false,
        });
        wx.hideLoading();
      })
    })
  },
  // 下拉加载更多
  scrolltolower(){
    wx.request({
      url: `https://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=${data_id}&hot=1&page=`+this.data.page,
      success: ((res) => {
        console.log(res.data)
        this.setData({
          hotList: res.data.hot,
          commentList: this.data.commentList.concat(res.data.data),
          page: this.data.page+1
        });
        wx.hideLoading();
      })
    })
  },
})