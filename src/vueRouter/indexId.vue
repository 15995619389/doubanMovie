<template>
    <div>
        动态路由id：{{$route.params.id}}
        <Textb :count=textIndex aa='10'></Textb>
        <div style="color:red">
            父组件接收子组件穿过来的值为：{{info}}
        </div>
        <ChildrenInfo @parentbb="parentsClick"></ChildrenInfo>
    </div>
</template>

<script>
import Textb from '@/vueRouter/textb'
import ChildrenInfo from '@/vueRouter/childrenInfo'

export default {
    data(){
        return{
            textIndex:"父组件给子组件传值利用props属性",
            info:''
        }
    },
    components:{
        Textb,
        ChildrenInfo
    },
    methods:{
        parentsClick:function(data){
            this.info = data
        }
    }
}
</script>

<style>

</style>
