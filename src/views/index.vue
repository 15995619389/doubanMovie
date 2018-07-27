<template>

    <div>
        <movie-list :movie-type="movieType"></movie-list>
    </div>
</template>

<script>
import movieList from '../components/movieList'
export default {
    data(){
        return{
            movieType:"in_theaters"   //搜索类型
        }
    },

    components:{
        'movie-list':movieList
    }
}
</script>

<style>

</style>
