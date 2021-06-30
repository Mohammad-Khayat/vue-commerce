<template>
  <div class="home">
    <home-header />
    <b-container>
      <h1 class="my-5">Our Latest Products</h1>
      <b-row cols-lg="4" cols-md="2" cols="2">
        <b-col v-for="item in latest" :key="item.id">
          <base-card :product="item"></base-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseCard from "../components/ui/BaseCard.vue";
import HomeHeader from "../components/ui/HomeHeader.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    BaseCard,
  },
  computed: {
    ...mapGetters(["latest"]),
  },
  created() {
    this.$store.dispatch("Get_Latest");
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/style.scss";
h1 {
  color: $purple;
}
</style>

