// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        tabSelectId: ''
    },
    /**
     * 监听子组件的 change 事件回调
     */
    onTabChange (e) {
        const { id } = e.detail;
        console.log(`父组件中接收到的 ID: ${id}`);
        this.setData({
            tabSelectId: id
        })
    }
})
