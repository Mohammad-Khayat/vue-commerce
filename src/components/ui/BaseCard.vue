<template>
  <div>
    <b-card
      class="shadow my-3 mx-auto"
      header-class=" headerStyle"
      footer-class="footerStyle"
      style="max-width: 20rem"
      body-class="py-2 px-2"
    >
      <template #header>
        <img :src="product.image" alt="" />
      </template>
      <b-card-text class="cardBody">
        <div class="head">
          <div>
            <h4 class="text-dark">{{ product.title }}</h4>
            <span class="text-rose price">{{ product.price }}$</span>
          </div>
          <span class="text-rose category">{{ product.category }}</span>
        </div>
        <p>
          {{ product.description }}
        </p>
      </b-card-text>
      <template #footer>
        <b-btn-group>
          <b-button  class="back-dark" @click="navigate" variant="dark">Details</b-button>
          <b-button variant="outline-dark text-dark"  @click="Get_Cart_Product(product)" ><i class="fas fa-shopping-cart"></i></b-button>
        </b-btn-group>
      </template>
    </b-card>
  </div>
</template>

<script >
import {mapActions} from 'vuex'
export default {
  props: ["product"],
  methods: {
    navigate() {
      this.$router.push('/details/'+this.product.id);
    },
    ...mapActions(['Get_Cart_Product'])
  },
};
</script>

<style lang='scss'>
@import '../../assets/vars.scss';
.back-violent{
  border:  none !important;
}
button.text-dark{
  border: $dark 1px solid;
  color: $dark !important;
  &:hover{
    background: $dark !important;
    color: #fff !important;
  }
}
p,
span,
h3,
h4,
h5 {
  margin: 0 !important;
}
.card-body {
  padding: 0 !important;
}
.headerStyle {
  background-color: #fff !important;
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  overflow: hidden;
}
.footerStyle {
  background-color: #fff !important;
  border: none !important;
  padding: 8px !important;
}
.cardBody {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .head {
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  p {
    margin: 5px 0 !important;
  }
  .price{
    font-weight: bold;
  }
  .category{
    font-size: 15px;
  }
}
</style>