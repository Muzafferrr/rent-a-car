<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import globalComponent from "@/globalComponent";

export default {
  data(){
    return{

    }
  },
  components:{
    ...globalComponent
  }
}
</script>
