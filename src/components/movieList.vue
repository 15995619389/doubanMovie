<template>
<div class="container">
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <h2>{{title}}</h2>
    <div class="row">
      <div class="col-md-2 text-center" v-for="item in list" :key="item.id" :id="item.id">
        <router-link :to="{path:'/detail/'+item.id}">
          <img :src="item.images.medium">
          <div class="title">{{item.title}}</div>
        </router-link>
        <!-- 豆瓣电影top250 -->
        <!-- <div>
          <span>{{item.title}}</span>
          <img :src="item.images.medium"/>
        </div> -->
      </div>
    </div>  
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      loading: true,
      title: "",
      list: []
    };
  },
  props: ["movieType"],
  mounted() {
    this.loadMovieList();
  },
  methods: {
    loadMovieList() {
      //   debugger
      this.loading = true;
      // 请求参数
      let params = {
        count: 18
      };
      // 请求路径
      
       let movieUrl = this.HOST +'/movie/'+ this.movieType;
      //  console.log(movieUrl)
        if (this.movieType == "search") {
          params["q"] = this.$route.params.searchKey;
        };

      this.$http.get(movieUrl).then(res => {
          // console.log( res.data);
          this.list = res.data.subjects
          this.title = res.data.title
          this.loading = false
        })
        .catch(err => {
          console.log(err);
        });
      // 豆瓣电影top250
      // let url = this.HOST + "/movie/top250";
      // this.$http.get(url, {params: {
      //       count: 20,
      //       start: 0
      //     }
      //   })
      //   .then(res => {
      //     console.log(res.data);
      //     this.list = res.data.subjects
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      // 知乎
      // let listUrl =this.HOST+'/4/themes'
      // this.$http.get(listUrl).then(res=>{
      //   console.log(res.data)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 230px;
  vertical-align: middle;
}
.row > div {
  margin-bottom: 20px;
}
.title {
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
