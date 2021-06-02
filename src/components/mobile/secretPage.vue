<template>
  <div class="h5index">
    <div class="w1200">
      <div class="top">
        <img class="nav" src="../../assets/img/h5/nav_logo@2x.png" alt />
      </div>
      <div class="na">
        <!-- <a :class="{ active: isActive1 }" @click="jump(1)">首页</a>
        <a style="margin: 0 40px" :class="{ active: isActive2 }" @click="jump(2)">用户协议</a>
        <a :class="{ active: isActive3 }" @click="jump(3)">隐私政策</a> -->
      </div>
    </div>


    <div class="secret" v-show="true" style="padding:10px">
      <div class="w1200" style="">
        <secretm></secretm>
      </div>
    </div>
    <div class="last">
      <div>商务合作邮箱： xxrr@dcdalu.cn</div>
      <div>浙江省杭州市萧山区宁围街道港汇中心1幢2611室</div>
      <div style="margin-top: 15px">© 2021 杭州歆歆然然网络科技有限公司 版权所有</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import VueAwesomeSwiper from "vue-awesome-swiper";
import userm from "./userm.vue";
import secretm from "./secretm.vue";
Vue.use(VueAwesomeSwiper);
export default {
  name: "h5index",
  components: {
    userm,
    secretm
  },
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    jump(n) {
      if (n == 1) {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
      } else if (n == 2) {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
      } else if (n == 3) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
      }
    },
    clickDown() {
      var timer = null;
      document.getElementById("down-btn").style.background = "#98051E";
      timer = setTimeout(function() {
        document.getElementById("down-btn").style.background = "#EB414A";
      }, 500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  /* margin: 0 10px; */
}
a {
  color: #42b983;
}
.h5index {
  background: #f4f4f4;
}
.w1200 {
  width: 100%;
  margin: 0 auto;
}
.top {
  width: 100%;
  height: 80px;
  background: #f4f4f4;
}
.top .nav {
  padding-top: 5px;
  width: 143px;
  height: 62px;
}
.na {
  margin-top: 10px;
  padding-bottom: 10px;
}
.na a {
  color: #333;
  font-size: 18px;
  cursor: pointer;
}
.middle {
  background: url("../../assets/img/h5/banner_bg@2x.png") no-repeat center
    center;
  width: 100%;
  height: 100%;
  /* position: relative; */
}
.h5index .img_c1 {
  width: 340px;
  height: 257px;
}
.middle .swiper-img {
  /* width: 340px; */
  padding-top: 56px;
}
.middle .monster {
  width: 149px;
  /* height: 128px; */
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 9999;
}
.na a.active {
  color: #dc1f48;
  border-bottom: 1.5px solid #dc1f48;
}
.logo2 {
  width: 208px;
  height: 91px;
}
.text {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #0a531e;
  text-align: center;
}
.downbtn {
  margin-top: 30px;
  margin-bottom: 30px;
  /* position: relative;
    left: 50%;
    margin-left: -120px; */
}
.down-btn {
  width: 240px;
  height: 80px;
  line-height: 80px;
  background: #eb414a;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  position: relative;
  left: 50%;
  margin-left: -120px;
}
.down-btn:hover {
  background: #e70052;
}
.down-t {
  width: 20px;
  height: 30px;
  position: relative;
  top: 6px;
}
.down-text {
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.down-cao {
  width: 110px;
  height: 58px;
  position: absolute;
  top: 25px;
}
.bolang {
  height: 21px;
  width: 100%;
  /* position: absolute; */
  bottom: -2px;
}
.last {
  padding-top: 28px;
  height: 150px;
  margin-top: -5px;

  background: #598f4a;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.user {
  background: #ffffff;
  padding: 15px;
}
.secret {
  background: #ffffff;
  padding: 15px;
}
</style>
