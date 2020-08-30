//Page Object
Page({
  data: {
    // 轮播图数组
    swiperList:[]
  },
  //页面开始加载是会触发的事件
  onLoad: function(options){
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (result)=>{
        this.setData({
          swiperList:result.data.message
        })
      }
    });
  }
});