<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/ui/NavBar.vue'
export default {
  components: { NavBar },


  
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
*{
font-family: 'Quicksand', sans-serif;
}

</style>
