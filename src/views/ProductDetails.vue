<template>
  <section class="details">
    <h1>{{ this.id }}</h1>
  </section>
</template>

<script>
import {mapActions ,mapState} from 'vuex'
export default {
props:['id'],
computed:{
...mapState({product:(state)=>state.products.details})
},

methods:{
    ...mapActions(['Get_Product_Details'])
},

created(){
    this.Get_Product_Details(this.id);
    console.log(this.product);
},

}


</script>

<style>
</style>