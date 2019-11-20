import tempObj from '../common/mainTabCell/mainTabCell'

var timestamp = getApp().timestamp;
Page({
  data:{
    imgs:[
      { url: "http://imge.kugou.com/mobilebanner/20190731/20190731234809940554.jpg" },
      { url: "http://imge.kugou.com/mobilebanner/20190731/20190731234822280903.jpg" },
      { url: "http://imge.kugou.com/mobilebanner/20190731/20190731234904119937.jpg" }
    ],
    list:{},
    tab:[//数据分类
      {
        name: "全部",
        type: 1,
      },
      {
        name: "图片",
        type: 10,
      },
      {
        name: "段子",
        type: 29,
      },
      {
        name: "音频",
        type: 31,
      },
      {
        name: "视频",
        type: 41,
      },
    ],
    currentType: 1,
    currentIndex: 0
  },
  // 传参只能通过data-set 方式，再从target对象获取
  //点击轮播图跳转
  swiperTap(e){
    getApp().linkUrl = e.target.dataset.link;
    wx.navigateTo({
      url: './link/link',
    })
  },
  // 调用查看大图方法,用import引入外来js
  clickImg(e){
    tempObj.clickImg(e);
  },
  // 查看评论，用data传值
  commentTap(e){
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: './comment/comment?id='+id,
    })
  },
  onLoad(){
    var that = this;
    //请求百思不得姐的全部数据
    that.requestBS();
    that.requestQQ();
  },
  //请求百思不得姐的数据
  requestBS(){
    var that = this;
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=list&c=data&type='+that.data.currentType,
      success: function (res) {
        that.setData({
          list: res.data.list
        });
        wx.hideLoading();
      }
    })
  },
  // 请求QQ音乐数据
  requestQQ(){
    wx.request({
      url: `https://route.showapi.com/213-4?showapi_appid=114344&showapi_timestamp=${timestamp}&topid=5&showapi_sign=f33852f7a1e445f890fc5a2b3c7fd17a`,
      success:((res)=>{
        console.log(res.data.showapi_res_body.pagebean.songlist.slice(0,3))
      })
    })
  },
  // 切换tab类型
  tabTap(e){
    this.setData({
      currentType: e.target.dataset.type,
      currentIndex: e.target.dataset.index,
    });
    wx.showLoading({
      title: '加载中',
    })
    this.requestBS();
  }
})