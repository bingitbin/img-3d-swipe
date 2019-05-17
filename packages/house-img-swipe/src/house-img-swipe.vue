<template>
  <div
    class="house-img-swipe-container"
    :class="{'house-swipe1': swipeList.length === 1, 'house-swipe2': swipeList.length === 2}"
    @click="handleClick"
    @change="handleChange"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <div
      class="swipe-item default-loading-background"
      :class="{transition:transition}"
      :key="index"
      v-for="(item,index) in swipeList"
      :style="item.style"
    >
      <img :src="item.img">
      <!-- <div class="location-info">
        <span>位于{{item.commercialDistrict}}</span>
        <span class="distance">距{{distanceRelativelyName}}{{item.distance}}</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseImgSwipe',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swipeList: [],
      // 距离相对名称
      distanceRelativelyName: null,
      transition: false
    }
  },
  watch: {
    data (val) {
      this.initSwipe()
    }
  },
  created () {
    this.initSwipe()
  },
  computed: {
    disabled () {
      return this.swipeList.length < 2
    },
    activeSwipe () {
      let activeIndex = this.swipeList.findIndex(_ => _.active)
      return { index: activeIndex, item: this.swipeList[activeIndex] }
    }
  },
  methods: {
    initSwipe () {
      let data = this.data || []
      let threeDZ = 0
      let swipeItem
      this.swipeList = data.map((item, index) => {
        swipeItem = { ...item }
        swipeItem.distance =
          swipeItem.distance < 1000
            ? swipeItem.distance + 'm'
            : (swipeItem.distance / 1000).toFixed(1) + 'km'
        swipeItem.active = index === 0
        swipeItem.z_index = this.data.length - index
        swipeItem.threeDZ = threeDZ
        swipeItem.style = this.getStyle(swipeItem.z_index, threeDZ)
        threeDZ += 50
        return swipeItem
      })
    },
    handleClick () {
      this.$emit('click', this.activeSwipe)
    },
    onTouchStart (event) {
      if (this.disabled) {
        return
      }
      this.deltaX = 0
      this.offsetX = 0
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
      this.startTime = event.timeStamp
    },
    onTouchMove (event) {
      this.transition = false
      if (this.disabled) {
        return
      }

      const touch = event.touches[0]
      this.deltaX = touch.clientX - this.startX
      if (this.deltaX > 0) {
        return
      }
      this.deltaY = touch.clientY - this.startY
      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      if (this.offsetX > this.offsetY && this.offsetX > 10) {
        event.preventDefault()
        event.stopPropagation()
        this.moveImg()
      }
    },
    moveImg () {
      let activeItem = this.activeSwipe.item
      // activeItem.style.left = `${-this.offsetX}px`
      activeItem.style.opacity = 1 * ((500 - this.offsetX) / 500)
      // -${this.offsetX / 5}
      activeItem.style.transform = `translate3d(-${40 * (this.offsetX / 350)}px, 0px, -${50 * (this.offsetX / 350)}px)`
      this.swipeList.filter(_ => !_.active).forEach(_ => {
        _.style.transform = `translate3d(0px, 0px, -${_.threeDZ - 50 * (this.offsetX / 350)}px)`
      })
    },
    onTouchEnd (event) {
      this.transition = true
      let activeSwipe = this.activeSwipe
      let activeIndex = activeSwipe.index
      let activeItem = activeSwipe.item
      // activeItem.style.left = 0
      activeItem.style.opacity = 1

      if (this.disabled || this.deltaX > 0) {
        this.calculateStyle()
        return
      }

      if (this.offsetX / (event.timeStamp - this.startTime) < 0.2 && this.offsetX < 100) {
        this.calculateStyle()
        // activeItem.style = this.getStyle(activeItem.z_index, activeItem.threeDZ)
        return
      }
      activeItem.active = false
      // eslint-disable-next-line
      this.swipeList[
        activeIndex === this.swipeList.length - 1
          ? 0
          : activeIndex + 1
      ].active = true

      this.calculateStyle()
      this.$emit('change', this.activeSwipe)
    },
    calculateStyle () {
      let activeIndex = this.swipeList.findIndex(_ => _.active)
      let threeDZ = 0
      let zIndex = this.swipeList.length

      let swipeItem
      for (let i = activeIndex; i < this.swipeList.length; i++) {
        swipeItem = this.swipeList[i]
        swipeItem.z_index = zIndex
        swipeItem.threeDZ = threeDZ
        swipeItem.style = this.getStyle(zIndex, threeDZ)
        threeDZ += 50
        zIndex--
      }
      for (let i = 0; i < activeIndex; i++) {
        swipeItem = this.swipeList[i]
        swipeItem.z_index = zIndex
        swipeItem.threeDZ = threeDZ
        swipeItem.style = this.getStyle(zIndex, threeDZ)
        threeDZ += 50
        zIndex--
      }
    },
    getStyle (zIndex, threeDZ) {
      return {
        left: 0,
        opacity: 1,
        'z-index': zIndex,
        transform: `translate3d(0px, 0px, -${threeDZ}px)`
      }
    }
  }
}
</script>

<style lang="scss">
.house-img-swipe-container {
  position: relative;
  width: 100%;
  //height: 373.2px;
  height: 186.6px;
  overflow: hidden;
  perspective: 1400px;
  perspective-origin: 168% 51%; //157
  &.house-swipe1 {
    //height: 414px;
    height: 204px;
    .swipe-item {
      //width: 690px;
      width: 340px;
    }
  }
  &.house-swipe2 {
    //height: 393px;
    height: 196.5px;
    .swipe-item {
      //width: 655px;
      width:95%
    }
  }
}
.swipe-item {
  position: absolute;
  height: 100%;
  //width: 622px;
  width: 90%;
  font-size: 12px;
  color: #ffffff;
  //box-shadow: 0px 2Px 3Px #D3D1D2;
  &.transition{
    transition: transform 1s,opacity 1s;
  }
  img {
    height: 100%;
    width: 100%;
  }
}
.location-info {
  display: flex;
  justify-content: space-between;
  position: absolute;
  //width: 622px;
  width: 100%;
  bottom: 25.2px;
  padding: 0 30px;
  box-sizing: border-box;
}
</style>
