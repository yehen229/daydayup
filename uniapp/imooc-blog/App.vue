<script>
export default {
  onLaunch: function () {
    /* #ifdef H5 */
    console.log('当前处于 H5 编译平台');
    /* #endif */
    /* #ifndef H5 */
    console.log('当前处于非 H5 编译平台');
    /* #endif */
  },
  onShow: function () {},
  onHide: function () {}
};
</script>

<style>
/*每个页面公共css */
</style>
