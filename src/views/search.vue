<template>
    <div>
        <movieList :movie-type="movieType" ref="updateList"></movieList>
    </div>
</template>

<script>
import movieList from "../components/movieList";
export default {
  data() {
    return {
      movieType: "search"
    };
  },
  watch: {
    // 监听路由，搜索页面重复搜索的时候改变路由状态，页面重新加载，不监听的话组件实例会被复用
    $route(to, from) {
      // 防止返回重复调用
      if (to.path.indexOf("/search/") == 0) {
        // 调用子组件的方法
        this.$refs.updateList.loadMovieList();
      }
    }
  },
  components: {
    movieList
  }
};
</script>

<style>
</style>
