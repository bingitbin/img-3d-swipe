<template>
  <div class="home">
    <house-img-swipe :data="data"/>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      data: [
        { img: 'http://dev-public-bucket.oss-cn-shanghai.aliyuncs.com/webapp/temp/WechatIMG1.jpeg' },
        { img: 'http://dev-public-bucket.oss-cn-shanghai.aliyuncs.com/webapp/temp/WechatIMG2.jpeg' },
        { img: 'http://dev-public-bucket.oss-cn-shanghai.aliyuncs.com/webapp/temp/WechatIMG3.jpeg' }
      ]
    }
  }
}
</script>
<style lang="scss">
*{
  box-sizing: border-box;
}
body{
  margin:0;
}
.home{
  padding: 0 15px 15px 27px;
  margin-top:30%;
  width:100%;
  text-align:center;
  border-bottom: 1px solid #D8D8D8;
}
</style>
