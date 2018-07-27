<template>
    <div>
        <p>子组件childrenInfo向父组件indexId传递值</p>
        <button @click="toParentsMsg">父组件indexId传递值</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"我是从子组件childrenInfo里传过来的值"
        }
    },
    methods:{
        toParentsMsg(){
            // 参数：parentbb:是在父组件on监听的方法
            // 参数：this.msg：是需要传的值
            this.$emit("parentbb",this.msg)
        }
    }
}
</script>

<style>

</style>
