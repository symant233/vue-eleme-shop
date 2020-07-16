<template>
  <div>
    <ele-header></ele-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/Header';

export default {
  // 配置组件
  components: {
    'ele-header': header,
  },
};
</script>

<style lang="stylus">
.tab
  .tab-item
    display inline-block
    .active
      color: #ff0000
</style>
