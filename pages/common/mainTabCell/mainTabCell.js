// 查看大图
  var clickImg = function(e) { 
    console.log(e.target.dataset.item.image0)
      wx.previewImage({
        current: e.target.dataset.item.image0, // 当前显示图片的http链接
        urls: [e.target.dataset.item.image0] // 需要预览的图片http链接列表
      })
    } 
 module.exports.clickImg = clickImg; 
