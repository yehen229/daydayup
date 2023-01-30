// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        page: 1,
        size: 10,
        total: -1,
        listData: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('onLoad');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: async function () {
        console.log('onReady');
        // 请求服务端获取数据
        // 页面出现之后，可以获取接口数据，并进行渲染
        const data = await this.getList()
        this.setData({
            listData: data.list,
            total: data.total
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: async function () {
        // 1. 重置页数
        this.setData({
            page: 1
        })
        // 2. 获取最新的数据
        const data = await this.getList()
        // 3. 使用新数据覆盖旧数据
        this.setData({
            listData: data.list
        })
        // 4. 关闭下拉刷新的动作(在真机中，下拉刷新的动作是不会自动关闭的)
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: async function () {
        // 当已经没有新数据之后，不再发起请求 -> 判断是否已经没有新数据了？
        if (this.data.total === this.data.listData.length) {
            return;
        }
        console.log('onReachBottom');
        // 1. 修改 page
        this.setData({
            page: this.data.page + 1
        })
        // 2. 获取最新数据
        const data = await this.getList()
        // 3. 新获取到的数据补充到现有数据的后面
        this.setData({
            listData: [...this.data.listData, ...data.list]
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    /**
     * 请求数据的方法
     */
    getList () {
        return new Promise((resolve, reject) => {
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/test/getList',
              data: {
                  page: this.data.page,
                  size: this.data.size
              },
              success: (res) => {
                resolve(res.data.data)
              }
            })
        })
    },
    /**
     * 编程式导航：跳转到 tabbar 页面
     */
    onSwitchToHome () {
        wx.switchTab({
          url: '/pages/index/index',
        })
    },
    /**
     * 编程式导航：跳转到 非tabbar 页面
     */
    onNavigateToDetail () {
        //  1. 以 `?` 分割 `url` 和参数
        // 2. 以 `=` 连接参数的 `key` 和 `value`
        // 3. 以 `&` 来拼接参数
        wx.navigateTo({
            url: '/pages/detail/detail?index={{index}}&title={{item.title}}',
        })
    }
})