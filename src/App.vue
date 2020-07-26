<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper f-fixed">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import qs from 'query-string'
import { getSeller } from './api'
import VHeader from 'components/v-header/v-header'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Tab from 'components/tab/tab'

export default {
  name: 'App',
  components: {
    VHeader,
    Tab,
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
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller,
          },
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller,
          },
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller,
          },
        },
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
}
</script>

<style lang="stylus">
@import "~common/stylus/index"

#app
  .tab-wrapper
    position: fixed
    top: 133px
    left: 0
    right: 0
    bottom: 0
</style>
