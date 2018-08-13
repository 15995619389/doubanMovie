<template>

    <div>
        <v-img></v-img>
        <p>{{computedTxt}}</p>

        <movie-list :movie-type="movieType"></movie-list>
         <v-pagination :total="model.total" :size="model.size" :page="model.page" :changge="pageFn" ></v-pagination>
            {{model.page}}

    </div>
</template>

<script>
// import Vue from 'vue'
// import pageination from 'vue_pageination';
// Vue.use(pageination);
// import img from '../components/images'
import img from './img'
import movieList from '../components/movieList'
import pagination from '../components/datapage2'
export default {
    data(){
        return{
            movieType:"in_theaters",   //搜索类型
            haystack:`在职期间受上家吴某的委托在`,
                model:{
                      total:300,//总页数
                      size:10,//每页显示条目个数不传默认10
                      page:1,//当前页码
                  }
        }
    },
    components:{
        'movie-list':movieList,
        // datapage
        'v-pagination':pagination,
        'v-img':img
    },
    computed:{
        computedTxt() {
            return this.methodGetByteLen(this.haystack, 40)
        },
        computedCharLen() {
            return this.haystack.length
        },
    },
    methods:{
              //页码切换执行方法
              pageFn(val){
                  this.model.page=val;
                  console.log(val);
                //   ajax请求
              },
                 methodGetByteLen(str, len) {
                     debugger
                    if (this.computedCharLen <= len) {
                        return str
                    }
                    for (let i = len ; i < str.length; i++) {
                        if (str.substr(0, i).replace(/[^\x00-\xff]/g, '01').length >= len) {
                            console.log()
                            return str.substr(0, i) + '...'
                        }
                    }
                }
    },

    mounted(){
        // this.getList()
    }
}
</script>

<style>

</style>
