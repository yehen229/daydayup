// components/tabs/tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        // tabs 数据
        listData: [],
        // 标记当前选中的 index
        active: -1
    },

    /**
     * 组件的方法列表
     * PS：组件中的方法必须定义到 methods 选项中
     */
    methods: {
        /**
         * 获取数据的方法
         */
        loadTabsData() {
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/hot/tabs',
              success: (res) => {
                this.setData({
                    listData: res.data.data.list,
                    active: 0
                })
              }
            })
        },
        /**
         * 1. 监听用户选中项的变化
         * item 点击事件
         */
        onItemClick(e) {
            // 1.1: 用户选中的下标
            const { index } = e.target.dataset;
            // 1.2：修改选中项
            this.setData({
                active: index
            })
        }
    },
    /**
     * 生命周期函数列表
     */
    lifetimes: {
        /**
         * 组件完全初始化完毕、进入页面节点树后
         */
        attached () {
            this.loadTabsData()
        }
    },
    // 目标：监听用户选中的 `tab`，根据用户选中的 `tab` 来切换底部 `list` 的数据
    // 步骤：
    // 1. 监听用户选中项的变化
    // 2. 获取用户选中的数据的 `id`
    // 3. 把 `id` 传递给 `list` 组件
    // 4. `list` 组件根据接收到的 `id` 获取对应的数据
    /**
     * 1.3：监听 active 的变化
     * 通过数据监听器：observers
     */
    observers: {
        // key：要监听的数据
        // value：数据变化时，调用的函数
        active: function (val) {
            // val：变化之后的值
            // 2. 获取用户选中的数据的 `id`
            const {id} = this.data.listData[val]
            console.log(`当前选中的 id：${id}`);
            // 3. 把 `id` 传递给 `list` 组件
            this.triggerEvent('change', {
                id // id: id
            })
        }
    }
})
