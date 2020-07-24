<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper"></div>
  </div>
</template>

<script>
import qs from 'query-string'
import { getSeller } from './api'
import VHeader from 'components/v-header/v-header'

export default {
  name: 'App',
  components: {
    VHeader,
  },
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id,
      },
    }
  },
  computed: {
    tabs() {
      return [
        // {
        //   label: '商品',
        //   component: Goods,
        //   data: {
        //     seller: this.seller,
        //   },
        // },
        // {
        //   label: '评论',
        //   component: Ratings,
        //   data: {
        //     seller: this.seller,
        //   },
        // },
        // {
        //   label: '商家',
        //   component: Seller,
        //   data: {
        //     seller: this.seller,
        //   },
        // },
      ]
    },
  },
  created() {
    getSeller({
      id: this.seller.id,
    }).then((seller) => {
      this.seller = Object.assign({}, this.seller, seller)
    })
  },
  methods: {},
}
</script>

<style lang="stylus">
@import "~common/stylus/index"

#app
  .tab-wrapper
    // position: fixed
    // top: 136px
    // left: 0
    // right: 0
    // bottom: 0
    position: relative
    height: 100vh
</style>
