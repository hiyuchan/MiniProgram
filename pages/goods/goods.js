// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList:[],
    rightList:[],
    currentIndex:'',
    page:2,//第二页开始发页数参数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestLeft();
  },
  tabChange(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.id,
      page:2//切换类型，重置页数
    })
    this.requestRight();
  },
  // 请求右边列表
  requestRight(){
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id=' + this.data.currentIndex,
      success: ((res) => {
        console.log("haunle")
        res.data.list.forEach((el)=>{
          el.isAtte = false;
        });
        this.setData({
          rightList: res.data.list,
        });
      }),
    });
  },
  // 请求列表
  requestLeft(){
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=category&c=subscribe',
      success: ((res) => {
        this.setData({
          leftList: res.data.list,
          currentIndex: res.data.list[0].id
        });
        this.requestRight();
      }),
    });
  },
  // 下拉刷新
  bindscrolltolower(){
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id='+this.data.currentIndex+'&page='+this.data.page,
      success: ((res) => {
        console.log(res)
        this.setData({
          rightList: this.data.rightList.concat(res.data.list),
          page: this.data.page+1
        });
        if (!(res.data.list.length)){
          console.log("到底了")
        }
      }),
    });
  },
  // 加关注
  addAtte(e){
    console.log(e.target.dataset.item)
    e.target.dataset.item.isAtte = true;
    console.log(e.target.dataset.item);
    var { uid, header, screen_name, fans_count } = e.target.dataset.item;
    var item = {uid, header, screen_name, fans_count };
    var atteList = wx.getStorageSync("atteList") ? wx.getStorageSync("atteList"):[];
    wx.setStorageSync("atteList", atteList.concat(item));
    wx.showToast({
      title: '已关注',
      duration: 2000
    });
    console.log(wx.getStorageSync("atteList"))
  }
})