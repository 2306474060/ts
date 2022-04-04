
<template>
  <div class="block" >
    <el-carousel height="350px">
      <el-carousel-item v-for="item in carouseData" :key="item">
        <img :src="item.url" style="width: 100%;height: 350px;float: right">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  name: "rollImages",
  components: {},
  data() {
    return {
      //定义跑马灯的图片路径
      carouseData: [
        { url: require("../assets/background.png") },
        { url: require("../assets/cover.png") },
        { url: require("../assets/background.png") },
        { url: require("../assets/cover.png") }
      ],
    };
  },
};

</script>
<style scoped>
.el-carousel__item h3 {
  float: right;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  padding: 0;
  text-align: center;
  height: 500px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block{
  height: 300px;
  width: 85%;
  float: right;
}
</style>