var wxCharts = require('../../../../utils/wxcharts.js');
var app = getApp();
var protein = null; //蛋白质
var fat = null //脂肪
var carbohydrate = null // 碳水化合物
Page({
  data: {
    
  },
  ouchHandler: function (e) {
    console.log(ringChart.getCurrentDataIndex(e));
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var windowWidth = 150;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth/3;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    // 蛋白质
    protein = new wxCharts({
      animation: true,
      canvasId: 'protein',
      type: 'ring',
      extra: {
        ringWidth: 5,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: '6.3%',
        color: '#7cb5ec',
        fontSize: 10
      },
      subtitle: {
        name: '蛋白质',
        color: '#666666',
        fontSize: 13
      },
      series: [{
        name: '蛋白质',
        data: 6.3,
        stroke: false
      }, {
        name: '其他',
        data: 35,
        stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 150,
      dataLabel: false,
      legend: false,
      background: '#f5f5f5',
      padding: 0
    });
    protein.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    // 脂肪
    fat = new wxCharts({
      animation: true,
      canvasId: 'fat',
      type: 'ring',
      extra: {
        ringWidth: 5,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: '0.9%',
        color: '#7cb5ec',
        fontSize: 10
      },
      subtitle: {
        name: '脂肪',
        color: '#666666',
        fontSize: 13
      },
      series: [{
        name: '脂肪',
        data: 0.9,
        stroke: false
      }, {
        name: '其他',
        data: 35,
        stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 150,
      dataLabel: false,
      legend: false,
      background: '#f5f5f5',
      padding: 0
    });
    protein.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    // 碳水化合物
    carbohydrate = new wxCharts({
      animation: true,
      canvasId: 'carbohydrate',
      type: 'ring',
      extra: {
        ringWidth: 5,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: '92.9%',
        color: '#7cb5ec',
        fontSize: 10
      },
      subtitle: {
        name: '碳水化合物',
        color: '#666666',
        fontSize: 13
      },
      series: [{
        name: '碳水化合物',
        data: 92.9,
        stroke: false
      }, {
        name: '其他',
        data: 35,
        stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 150,
      dataLabel: false,
      legend: false,
      background: '#f5f5f5',
      padding: 0
    });
    carbohydrate.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });

    setTimeout(() => {
      protein.stopAnimation();
      fat.stopAnimation();
      carbohydrate.stopAnimation();
    }, 1000);
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