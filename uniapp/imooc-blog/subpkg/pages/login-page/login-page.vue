<template>
  <my-login @onLoginSuccess="onLoginSuccess" />
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * 登录成功的事件回调
     */
    onLoginSuccess() {
      console.log('onLoginSuccess');
      uni.navigateBack({ delta: 1 });
    }
  }
};
</script>

<style lang="scss"></style>
