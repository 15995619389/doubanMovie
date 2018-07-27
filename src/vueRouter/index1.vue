<template>
    <div>
        4444444444444
        <div>
            <router-link to="/vueR/music">miuse子路由</router-link>
            <!-- 利用路由传值给movie组件 -->
            <router-link :to="{name:'movie',params:{toText:text,Iphone:userIphone}}">movie子路由</router-link>
            <div>
                <button @click="miuse">miuse的router.push()</button>
                <button @click="movie">movie</button>
            </div>
        <router-view></router-view>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:"组件传值利用<router-link></router-link>标签中的to传参,给movie组件，利用:to{name:'组件的name',params:{toText:text}}",
            userIphone:"ios6plus"
        }
    },
    methods:{
        miuse(){
            // router-link时执行的就是router.push()的方法，我们可以单独给它一个点击事件，同样可以实现跳转
            this.$router.push('/vueR/music')
        },
        movie(){
            this.$router.push('/vueR/movie')
        }
    }
}
</script>

<style>

</style>
