//index.js
//获取应用实例
var API_URL = "https://api.douban.com/v2/movie/top250";
Page({
  data: {
    title:"加载中...",
    //定义一个电影列表
    movies: []
  },
  onLoad: function () {
    //保存全局变量在that中里层函数使用
    var that = this;
    //显示加载框
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
    });
    wx.request({
      url: API_URL ,//仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        //加载出来之后加载框隐藏
        wx.hideToast();
        // 获取得到的数据放到data中
        var data = res.data;
        that.setData({
          //将获得到的数据中的title放到页面的title中
          title:data.title,
          movies:data.subjects
        });
        console.log(res.data);
      }
    })
  }
})
