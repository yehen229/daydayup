<template>
  <view class="my-search-container">
    <!-- 搜索输入框 -->
    <uni-search-bar
      v-if="isShowInput"
      class="my-search-bar"
      :radius="100"
      @confirm="onSearch"
      @focus="onFocus"
      @blur="onBlur"
      @clear="onClear"
      @cancel="onCancel"
      @input="onInput"
      :bgColor="config.backgroundColor"
      :placeholder="placeholderText"
      :value="value"
    >
      <uni-icons slot="clearIcon" type="clear" color="#999999" />
    </uni-search-bar>
    <!-- 搜索按钮 -->
    <view
      class="my-search-box"
      v-else
      :style="{
        height: config.height + 'px',
        backgroundColor: config.backgroundColor,
        border: config.border
      }"
    >
      <image class="icon" :src="config.icon" />
      <text
        class="placeholder"
        :style="{
          color: config.textColor
        }"
        >{{ placeholderText }}</text
      >
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-search',
  props: {
    // placeholder
    placeholderText: {
      type: String,
      default: '搜索'
    },
    // 配置对象
    config: {
      type: Object,
      default: () => ({
        height: 36,
        backgroundColor: '#ffffff',
        icon: '/static/images/search.png',
        textColor: '#454545',
        border: '1px solid #c9c9c9'
      })
    },
    // 是否显示输入框
    isShowInput: {
      type: Boolean,
      default: false
    },
    // 输入的内容
    // value 名称不可修改，与 $emit('input') 事件对应
    value: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * 点击搜索按钮触发
     */
    onSearch() {
      this.$emit('search', this.value);
    },
    /**
     * 输入框获取焦点触发
     */
    onFocus() {
      this.$emit('focus', this.value);
    },
    /**
     * 输入框失去焦点触发
     */
    onBlur() {
      this.$emit('blur', this.value);
    },
    /**
     * 点击输入框中的清空按钮时
     */
    onClear() {
      this.$emit('clear', this.value);
    },
    /**
     * 点击取消按钮时
     */
    onCancel() {
      this.$emit('cancel', this.value);
    },
    /**
     *  value 改变时触发事件
     */
    onInput(val) {
      // input 的事件名称不可修改，与 props 中的 value 对应
      // 当同时存在：
      // props -> value
      // $emit('input', val)
      // 时，在组件外可以使用 v-model 完成双向数据绑定。
      // 即：用户输入内容时，父组件传递过来的 value 同步发生变化
      // 详细见 vue 中 v-model 指令：https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-search-container {
  display: flex;
  align-items: center;
  .my-search-bar {
    width: 100%;
  }
  .my-search-box {
    height: 36px;
    background-color: #ffffff;
    border-radius: 15px;
    border: 1px solid #c9c9c9;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 $uni-spacing-row-base;

    .icon {
      width: $uni-img-size-sm;
      height: $uni-img-size-sm;
    }

    .placeholder {
      font-size: $uni-font-size-sm;
      margin-left: $uni-spacing-row-sm;
      color: #454545;
    }
  }
}
</style>
