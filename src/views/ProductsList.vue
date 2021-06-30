<template>
  <div class="productsList">
    <b-container>
      <div class="shadow back-purple text-light py-3 px-3">
        <h4>All Products</h4>
      </div>
      <div class="controllers">
        <b-pagination
          class="mt-4"
          v-model="currentPage"
          :total-rows="products.length"
          :per-page="perPage"
        ></b-pagination>
        <div class="filters">
          <input
            type="text"
            class="form-control"
            placeholder="search here..."
          />
          <b-button class="back-dark search"
            ><i class="fas fa-search"></i
          ></b-button>
          <b-form-select class="mx-4" v-model="selected" :options="categories"></b-form-select>
        </div>
      </div>
      <b-row cols="1" cols-lg="4" cols-md="3" cols-sm="2">
        <b-col
          v-for="product in products.slice(
            (currentPage - 1) * perPage,
            currentPage * perPage
          )"
          :key="product.id"
        >
          <base-card :product="product"></base-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseCard from "../components/ui/BaseCard.vue";
import { mapGetters ,mapState } from "vuex";
export default {
  components: { BaseCard },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      selected:'All',
    };
  },
  computed: {
    ...mapState({categories:(state)=>state.products.categories}),
    ...mapGetters(["products"]),
  },
  created() {
    this.$store.dispatch("Get_Products");
  },
};
</script>

<style lang='scss'>
.controllers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .filters {
    align-items: center;
    display: flex;
    select {
      border: 1px purple solid;
      height: 100%;
      border-radius: 10px;
    }
    i {
      margin: auto;
      font-size: 20px;
    }
  }
}
</style>