Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        id:'01',
        name:'营养元素'
      },
      {
        id: '02',
        name: '每100克'
      },
      {
        id: '03',
        name: '营养素占比'
      }
    ],
    items:[
      {
        id:'热量',
        name:'热量',
        num:'93.0',
        unit:'千卡',
        percentage:20
      },
      {
        id: '蛋白质',
        name: '蛋白质',
        num: '1.4',
        unit: '克',
        percentage: 20
      },
      {
        id: '脂肪',
        name: '脂肪',
        num: '0.2',
        unit: '克',
        percentage: 15
      },
      {
        id: '碳水化合物',
        name: '碳水化合物',
        num: '2.8',
        unit: '克',
        percentage: 25
      },
      {
        id: '膳食纤维',
        name: '膳食纤维',
        num: '-',
        unit: '',
        percentage: 18
      },
      {
        id: '维生素A',
        name: '维生素A',
        num: '234.0',
        unit: '毫克',
        percentage: 12
      },
      {
        id: '维生素C',
        name: '维生素C',
        num: '-',
        unit: '',
        percentage: 5
      },
      {
        id: '维生素E',
        name: '维生素E',
        num: '1.8',
        unit: '毫克',
        percentage: 23
      },
      {
        id: '胡萝卜素',
        name: '胡萝卜素',
        num: '-',
        unit: '',
        percentage: 15
      },
      {
        id: '维生素B1',
        name: '维生素B1',
        num: '0.1',
        unit: '毫克',
        percentage: 1
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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