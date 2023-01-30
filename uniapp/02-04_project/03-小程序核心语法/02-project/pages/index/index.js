// index.js
// 获取应用实例
const app = getApp()

/**
 * 限制：
 * 1. 只能请求 HTTPS 类型的接口
 * 2. 必须把接口的域名添加到信任列表中
 * 解决方案：
 * 1. 生产环境（兼容开发环境）：配置了合法域名
 * 2. 开发环境：勾选【不校验合法域名】
 */
Page({
    /**
     * get 请求
     */
    onGetClick () {
        wx.request({
          url: 'https://api.imooc-blog.lgdsunday.club/api/test/getList',
          method: "GET",
          success: (res) => {
            console.log(res);
          }
        })
    },
    /**
     * post 请求
     */
    onPostClick () {
        wx.request({
            url: 'https://api.imooc-blog.lgdsunday.club/api/test/postData',
            method: "POST",
            data: {
                msg: "祝愿大家心想事成，万事如意！"
            },
            success: (res) => {
              console.log(res);
            }
          })
    },
    /**
     * async + await
     * 目标：使用 async + await 完成需求：
     *  1. 先去请求接口 A
        2. 在接口 A 获取到数据之后，再去请求接口 B
        3. 在接口 B 获取到数据之后，再去请求接口 C
        4. 在接口 C 获取到数据之后，再去请求接口 D
     */
    /**
     * 1. 因为小程序中的 wx.requst 方法不支持 promise 化，使用 promise 封装 wx.request 请求
     * 2. 使用 async + await 简化 promise 操作
     */
    async onAsyncClick () {
        const resA = await this.pA();
        console.log(resA.data.data.msg);
        const resB = await this.pB();
        console.log(resB.data.data.msg);
        const resC = await this.pC();
        console.log(resC.data.data.msg);
        const resD = await this.pD();
        console.log(resD.data.data.msg);
    },
    pA() {
        return new Promise((resolve, reject) => {
            console.log('执行A接口的逻辑')
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/test/A',
              success: (res) => {
                resolve(res)
              },
              fail: (err) => {
                reject(err)
              }
            })
        })
    },
    pB() {
        return new Promise((resolve, reject) => {
            console.log('执行B接口的逻辑')
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/test/B',
              success: (res) => {
                resolve(res)
              },
              fail: (err) => {
                reject(err)
              }
            })
        })
    },
    pC() {
        return new Promise((resolve, reject) => {
            console.log('执行C接口的逻辑')
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/test/C',
              success: (res) => {
                resolve(res)
              },
              fail: (err) => {
                reject(err)
              }
            })
        })
    },
    pD() {
        return new Promise((resolve, reject) => {
            console.log('执行D接口的逻辑')
            wx.request({
              url: 'https://api.imooc-blog.lgdsunday.club/api/test/D',
              success: (res) => {
                resolve(res)
              },
              fail: (err) => {
                reject(err)
              }
            })
        })
    }
})
