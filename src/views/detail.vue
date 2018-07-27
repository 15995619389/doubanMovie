<template>
    <div class="container">
        <div class="canvas" v-show="loading">
            <div class="spinner"></div>
        </div>
        <h2>{{datail.title}}({{datail.year}})</h2>
        <div class="box">
            <div class="left">
                <img :src="datail.images.small">
            </div>
            <div class="main">
                <div>导演：{{datail.original_title}}</div>
                <div >主演：<span v-for="(names,index) in zhuyan" :id="names.id" :key="index">{{names.name}}/</span></div>
                <div>类型：<span v-for="(item,index) in movieType" :key="index" style="margin:0 5px">{{item}}</span></div>
                <div>纸片国家/地区：<span v-for="(item,index) in guojia" :key="index">{{item}}</span></div>
                <div>评分：{{datail.collect_count}}</div>
                <div>又名：<span v-for="(item,index) in bieming" :key="index">{{item}}</span></div>
                <div>
                    <h5>{{datail.title}}--剧情介绍</h5>
                    {{datail.summary}}                  
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            datail:[],
            zhuyan:[],
            movieType:[],
            guojia:[],
            bieming:[],
            loading:false
        }
    },
    mounted(){
       this.init()
    },
    methods:{
        init(){
           let datailUrl = this.HOST+'/movie/subject/'+this.$route.params.id;
            this.$http.get(datailUrl).then((res)=>{
                console.log(res)
                this.datail = res.data
                this.zhuyan = res.data.casts
                this.movieType = res.data.genres
                this.guojia = res.data.countries
                this.bieming = res.data.aka
            
            })
        }
    }
};
</script>

<style scoped>
.box {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }

  .left {
    width: 200px;
    height: 300px;
  }

  .left img {
    width: 100%;
    height: 100%;
  }

  .main {
    margin-left: 20px;
    flex: 1;
  }
</style>
