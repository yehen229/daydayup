// components/list/list.js
Component({
    options: {
        // 在当前组件中开启了多个插槽
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        tabId: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        listData: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 数据请求的方法
         */
        loadListData() {
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/hot/list',
              data: {
                  type: this.data.tabId // this.data 访问 properties 中的数据
              },
              success: (res) => {
                  console.log(res.data.data);
                  this.setData({
                    listData: res.data.data.list
                  })
              }
            })
        }
    },
    /**
     * 数据监听器
     */
    observers: {
        tabId: function (val) {
            if (!val) return;
            console.log(`list 组件中接收到的 ID: ${val}`);
            // TODO: 数据请求操作
            // 4. `list` 组件根据接收到的 `id` 获取对应的数据
            this.loadListData()
        }
    }
})
