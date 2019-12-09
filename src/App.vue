<template>
  <div id="app">
    <router-view/>
    <!-- 返回顶部 -->
    <div id="dtop" class="gotop animated fadeInUp" title="返回顶部">
     <div  @click="movetop()"> 顶部</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: 'App',
  mounted() {
    
    window.addEventListener("scroll", function(e) {
      // 监听（绑定）滚轮滚动事件
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > 310) {
        document.getElementById("dtop").style.display = "block";
      } else {
        document.getElementById("dtop").style.display = "none";
      }
    });
  },
  methods: {
    movetop() {
      $("body,html").animate({ scrollTop: 0 }, 1000);
    },
    
  },

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* 返回顶部 */
.gotop {
  position: fixed;
  z-index: 9999;
  right: 33px;
  bottom: 35px;
  display: none;
  cursor: pointer;
  width: 46px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
  color:rgb(22, 149, 223);
  border-radius: 100%;
  box-shadow: 0px 0px 0px 1px rgba(35, 170, 211, 0.61);
  font-family: PingFangSC-Regular, sans-serif;
}
.gotop:hover{
  font-weight: bolder;
}
</style>
