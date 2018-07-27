<template>
  <div id="app">
    <vHeader></vHeader>
    <div class="container">
      <!-- keep-alive:缓存页面组件，减少性能消耗 -->
      <!-- <keep-alive>
        <router-view></router-view>
      </keep-alive> -->
      <router-link to='/vueR'>vueRouter</router-link>
      <router-link to='/IndexId/123'>IndexId</router-link>
      <router-link to='/username/shanghai/id/123'>username</router-link>

        <router-view></router-view>

    </div>
  </div>
</template>

<script>
import vHeader from "./components/header";
export default {
  name: "App",
  components: {
    vHeader
  }
};
</script>

<style>
  a {
    color: #888;
  }
  .canvas {
    display: flex;
    justify-content: center;
  }
  .spinner {
    animation: spinner 1s linear infinite;
    border: solid 1.5em #4DB6AC;
    border-right: solid 1.5em transparent;
    border-left: solid 1.5em transparent;
    border-radius: 100%;
    width: 0;
    height: 0;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(60deg)
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
