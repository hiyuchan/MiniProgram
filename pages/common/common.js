// 查看大图
function pickImage(item) {
  wx.previewImage({
    current: 'item.image0', // 当前显示图片的http链接
  })
};

exports.pickImage = pickImage;