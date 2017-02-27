// pages/movie/movie.js
var API_URL = "https://api.douban.com/v2/movie/subject/";
Page({
  data:{
    movie:{}
  },
  //接收首页传过来的参数函数
  onLoad:function(params){
    //保存this
    var that = this;
    //先测试打印从Index页面得到的data
    // console.log(params);
    //获取影片详情页面请求，也可以把请求封装在APPAPP．ｊｓ里面整个项目都可以用
    wx.request({
  url: API_URL+params.id,
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'content-type': 'json'
  },
  success: function(res) {
    // console.log(res.data)
    //获取返回到的数据
    that.setData({
      movie:res.data
    })
  }
})
  }
})