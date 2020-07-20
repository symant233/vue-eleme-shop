<template>
  <div>
    <ele-header :seller="seller"></ele-header>
    <div class="tab border-1px">
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
import axios from 'axios';
import header from './components/Header/Header';

export default {
  data() {
    return {
      seller: {},
    };
  },
  components: {
    'ele-header': header,
  },
  created() {
    axios.get('/api2/seller').then((response) => {
      const result = response.data;
      console.log(result);
      if (result.code === 'OK') {
        this.seller = result.data;
      }
    });
  },
};
</script>

<style lang="stylus">
@import "./common/stylus/mixins.styl";

body
  max-width 400px
  margin auto

.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(0, 0, 0, 0.5))
  .tab-item
    flex auto
    text-align center
    & > a
      // display block
      font-size 15px
      color #555555
      &.active
        color rgb(240, 20, 20)
</style>
