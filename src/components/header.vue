<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-brand">
                <router-link to="/">豆瓣电影</router-link>
            </div>
            <div class="navbar-form navbar-left" role="search" @submit.prevent="submit">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="输入电影名称" v-model="searchKey">
                </div>
                <button type="submit" class="btn btn-default">搜索</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      searchKey: ""
    };
  },

  methods: {
    submit() {
      if (!this.searchKey) {
        alert("请输入内容！");
        return;
      }
      // 页面跳转
      this.$router.push({
        path: "/search/" + this.searchKey
      });
      this.searchKey = "";
    },

    
  }
};
</script>

<style>
</style>
