# house-img-swipe

> 基于Vue的图片3d轮播

## 效果图

``` bash
![screenshot]()
```

## 安装

``` bash
$ npm install house-img-swipe -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import 'house-img-swipe/imgswipe.css'
import HouseImgSwipe from 'house-img-swipe'
Vue.use(HouseImgSwipe)
```

在项目中使用 HouseImgSwipe

```vue
<template>
  <div>
    <house-img-swipe :data="data" @click="handleClick" @change="handleChange"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { img: 'http://dev-public-bucket.oss-cn-shanghai.aliyuncs.com/webapp/temp/WechatIMG1.jpeg' },
        { img: 'http://dev-public-bucket.oss-cn-shanghai.aliyuncs.com/webapp/temp/WechatIMG2.jpeg' },
        { img: 'http://dev-public-bucket.oss-cn-shanghai.aliyuncs.com/webapp/temp/WechatIMG3.jpeg' }
      ]
    }
  },
  methods:{
    //点击当前显示时触发
    handleClick(activeItem){
      console.log(activeItem)
    },
    //当前显示的图片切换时触发
    handleChange(activeItem){
      console.log(activeItem)
    },
  }
}
</script>
```

## 特点
1. 简单易用 3D轮播效果
2. 提供以 `npm` 的形式安装提供全局组件

## 选项
暂时支持以下事件
1. `click`：点击当前显示的图片时触发
2. `change`：当图片切换时触发

