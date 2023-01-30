// index.js
// 获取应用实例
const app = getApp()

Page({
//   定义数据
    data: {
        product: {
            price: 10,
            num: 5
        },
        msg: '',
        products: [
            {
                name: '苹果',
                price: 3.2
            },
            {
                name: '面包',
                price: 5
            },
            {
                name: '可乐',
                price: 2.5
            }
        ]
    },
    /**
     * num + 1 的对应事件
     */
    onAddNum () {
        // this.setData({
        //     // key 代表：修改的数据
        //     // val 代表：当前 key 的最新值
        //     msg: '我是最新的值'
        // })

        // 修改 data 的数据： setData
        // 访问 data 的数据：this.data
        this.setData({
            // key 代表： product 对象的 num 属性
            // val 代表：当前 key 的最新值
            'product.num': this.data.product.num + 1
        })
    },
    /**
     * num + N 的对应事件
     */
    onAddNumN(e) {
        console.log(e);
        // 拿到传递的参数
        const step = parseInt(e.target.dataset.step)
        // 修改 num
        this.setData({
            'product.num': this.data.product.num + step
        })
    },
    /**
     * input 的输入行为回调方法
     */
    onInput (e) {
        console.log(e);
        // 4. 获取用户输入的值
        const val = parseInt(e.detail.value)
        // 5. 赋值给【商品数量】
        this.setData({
            'product.num': val
        })
    }
})
