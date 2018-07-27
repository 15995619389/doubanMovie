<template>
    <div>
        <p style="color:blue">子组件接收父组件indexId传过来的值</p>
        {{count}}--{{aa}}
    </div>
</template>

<script>
export default {
    props:['count','aa'],
    // methods: {
    //         increment(){
    //             this.num++;
    //         },
    //         decrement(){
    //             this.num--;
    //         }
    //     }
}
</script>

<style>

</style>
