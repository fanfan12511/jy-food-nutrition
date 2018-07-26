Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:'hot',
        name:'热门搜索',
        tags:['苹果','香蕉','馒头','红薯','酸奶','豆浆']

      }, {
        id: 'history',
        name: '历史搜索',
        tags: ['南瓜','玉米','土豆','西红柿','牛肉']

      }
    ],
    items:[
      {
        id: '西红柿',
        name: '西红柿',
        num: '93',
        unit:'g/100g',
        left: '0',
        img: '../../../../images/img01.jpeg',
        url: '../../pages/details/details'
      },
      {
        id: '西红柿',
        name: '西红柿苹果',
        num: '193',
        unit: 'GI值:',
        left: '1',
        img: '../../../../images/img01.jpeg',
        url: '../../pages/details/details'
      }, {
        id: '西红柿',
        name: '土豆西红柿',
        num: '253',
        unit: 'g/100g',
        left:'0',
        img: '../../../../images/img01.jpeg',
        url: '../../pages/details/details'
      }

    ],
    filters:[
      {
        id:'筛选',
        name:'营养素排行',
        open:false,
        arrs:[
          {
            id:'热量',
            show: true,
            name:'热量'
          },
          {
            id: '蛋白质',
            show:false,
            name: '蛋白质'
          },
          {
            id: '脂肪',
            show:false,
            name: '脂肪'
          },
          {
            id: '膳食纤维',
            show:false,
            name: '膳食纤维'
          },
          {
            id: '碳水化合物',
            show: false,
            name: '碳水化合物'
          }
        ]
      }
    ]
  },

  kindTaggle: function(e) {
    var list = this.data.filters
    if (list[0].open) {
      list[0].open = false
    } else{
      list[0].open = true
    }
    this.setData({
      filters: list
    })
  },

  filterTaggle: function (e) {
    var id = e.currentTarget.id, list = this.data.filters
    for (var i = 0; i < list[0].arrs.length; i++) {
      if (list[0].arrs[i].id == id) {
        list[0].arrs[i].show = !list[0].arrs[i].show
      } else {
        list[0].arrs[i].show = false
      }
    }
    this.setData({
      filters: list
    })
  }
})