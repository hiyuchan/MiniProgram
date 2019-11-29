// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList:[],
    currentSongIndex:0,
    musicList:[
      { url: "https://webfs.yun.kugou.com/201911211425/bbca44ac7012fabf4b22c6522e6f1683/G013/M03/0C/1D/TQ0DAFUOvd6APXf5ADb1EVEwIEg420.mp3",title:"《吴哥窟》"},
      { url: "https://webfs.yun.kugou.com/201911211427/c4caf1cfc81b66b424a179929f736e1e/G015/M03/05/15/Tw0DAFUZ3saAPu93AD9HDtR9p10828.mp3",title:"《我本人》"},
      { url:     "https://webfs.yun.kugou.com/201911231103/e26ad8747f8bedcf31ba13ae12ef6154/G007/M00/19/04/Rw0DAFUHD_SAe8WeAEBJIwNLLmk839.mp3",title:"《生命树》"}
    ],
    isPlay:'',
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
          menuList: res.data.square_list.slice(0,16),
        })
      })
    });
    // this.playSong(); 
    //监听音乐播放
    wx.onBackgroundAudioPlay(()=>{
      this.setData({
        isPlay:true,
      })
    });
    // 监听音乐暂停
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isPlay: false,
      })
    });
    // 监听音乐停止
    wx.onBackgroundAudioStop(()=>{
      this.setData({
        isPlay: false,
      });
      setTimeout(()=>{
        this.cutSong();
      },1000)
    })
  },
  playSong(){
    var that = this;
    wx.playBackgroundAudio({
      dataUrl: that.data.musicList[that.data.currentSongIndex].url,
      title: that.data.musicList[that.data.currentSongIndex].title
    })
  },
  musicStatus(){
    this.setData({
      isPlay:!this.data.isPlay,
    });
    if (this.data.isPlay){
      this.playSong();
    }else{
      wx.pauseBackgroundAudio();
    }
  },
  cutSong(){
    if(this.data.currentSongIndex<2){
      this.data.currentSongIndex++;
      this.playSong();
    }else{
      this.data.currentSongIndex=0;
      this.playSong();
    }
  }
})