<template>
  <div class="tab">
    <cube-tab-bar
      ref="tabBar"
      :data="tabs"
      :useTransition="false"
      :showSlider="true"
      v-model="selectedLabel"
      class="border-bottom-1px"
    >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        ref="slide"
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component
            ref="component"
            :is="tab.component"
            :data="tab.data"
          ></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0,
      },
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      },
    },
  },
  mounted() {
    this.onChange(this.index)
  },
  methods: {
    onScroll(pos) {
      // 滚动条位置
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = (-pos.x / slideWidth) * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange(current) {
      this.index = current
      const comp = this.$refs.component[current]
      if (comp && comp.fetch) {
        // 请求对应组件需要的数据
        comp.fetch()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.tab
  display: flex
  flex-direction: column
  height: 100%
  >>> .cube-tab
    padding: 10px 0
  // >>> vue loader scoped css
  // https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8
  .slide-wrapper
    flex: 1
    overflow: hidden
</style>
