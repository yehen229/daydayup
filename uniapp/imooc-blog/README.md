# imooc-blog-code

## 运行须知

1. 该项目应运行在 `HBuilder X` 之中
2. 运行该项目前，请先执行 `npm install` 下来依赖包

## Bug & Tip

1. 首页中 `swiper` 快速滚动导致 `setData` 被不停地调用的问题
   此问题为 [微信小程序 swiper 组件的 bug](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)，可通过以下代码进行修复：

```
    onSwiperChange(e) {
      ...
			// 解决官方 swiper 在 change 里改变 current 值无限左右抖动的 bug
			if (e.detail.source === 'touch') {
				this.currentIndex = e.detail.current;
			}
    }
```
