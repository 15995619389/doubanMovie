<template>
    <div>
        <v-img></v-img>
    </div>
</template>

<script>
import img from '../views/img2'
import Bus from '../assets/bus.js'
export default {
  components: { Bus },
  data () {},
  components:{
      'v-img':img
  },
  created: function () {
    Bus.$on('getTarget', imgToken => {  
      var _this = this;
      console.log(imgToken);
     
    });  
  }
}
</script>

<style scoped>

</style>
