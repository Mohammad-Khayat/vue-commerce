<template>
<div>
      <div  class="header back-purple mb-4 text-center text-light py-3">
      <h2>Your Cart</h2>
      <p>You habe <span class="text-rose">{{cartLength}} </span>Products in Your Cart</p>
      </div>
      <h1 v-if="cartLength===0 " class="text-center text-rose mt-5">Your Cart is Empty !</h1>
  <section class="cart" v-else>
    <b-container >
      <div  class="table">
      <div class="totalPrice back-dark">
        <h4>
          Total Price :<span class="text-rose">
            {{ Math.round(totalPrice) }}$</span
          >
        </h4>
        <b-button-group class="btns-group"
          ><b-button class="mx-2 back-rose">Buy All</b-button>
          <b-button @click="Delete_Cart_Product('all')" class="back-purple">Delete All</b-button></b-button-group
        >
      </div>
      <vue-good-table
        styleClass="vgt-table"
        :columns="columns"
        :rows="cart.products"
      >
        <template slot="table-row" slot-scope="props">
          <div class="product" v-if="props.column.field == 'title'">
            <img :src="props.row.image" alt="" />
            <h4 class="text-dark">{{ props.row.title }}</h4>
          </div>

          <div class="center" v-if="props.column.field == 'price'">
            <h5 class="text-rose">{{ Math.round(props.row.price) }} $</h5>
          </div>
          <div v-if="props.column.field == 'quantity'">
            <input
              type="number"
              v-model="cart.products[props.row.originalIndex].quantity"
              max="20"
              min="1"
            />
          </div>
          <div class="center" v-if="props.column.field == 'description'">
            <p class="text-dark">{{ props.row.description }}</p>
          </div>
          <div class="center" v-if="props.column.field == 'totalPrice'">
            <h5 class="text-rose">
              {{Math.round( props.row.price * props.row.quantity) }} $
            </h5>
          </div>
          <div class="center" v-if="props.column.field == 'options'">
            <h5 class="text-rose">
              <b-button class="back-purple" @click="Delete_Cart_Product(props.row.id)" pill>
                <i class="fas fa-trash" ></i>
              </b-button>
            </h5>
          </div>
        </template>
      </vue-good-table>
    </div>
    </b-container>
  </section>
</div>
</template>

<script>
import { mapGetters, mapState,mapActions } from "vuex";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

// add to component
export default {
  components: { VueGoodTable },
  data() {
    return {
      columns: [
        {
          label: "Tile",
          field: "title",
          tdClass: "v-middle",
          thClass: "headerStyle back-dark",
        },
        {
          label: "Description",
          field: "description",
          tdClass: "v-middle",
          thClass: "headerStyle back-dark",
        },
        {
          label: "Price",
          field: "price",
          tdClass: "v-middle",
          thClass: "headerStyle back-dark",
        },
        {
          label: "Amount",
          field: "quantity",
          tdClass: "v-middle inp",
          thClass: "headerStyle back-dark",
        },
        {
          label: "Total",
          field: "totalPrice",
          tdClass: "v-middle",
          thClass: "headerStyle back-dark",
        },
        {
          label: "Options",
          field: "options",
          tdClass: "v-middle",
          thClass: "headerStyle back-dark",
        },
      ],
    };
  },
  methods:{
    ...mapActions(['Delete_Cart_Product'])
  },
  computed: {
    ...mapState({ cart: (state) => state.products.cart }),
    ...mapGetters(["totalPrice"]),
    cartLength(){
      return this.cart.products.length
    }
  },
  created() {},
};
</script>

<style lang='scss'>
@import "../assets/vars.scss";
h1,h2,h3,h4,h5,p,span{
  margin: 0;
}
.totalPrice {
  justify-content: space-between;
  padding: 10px 15px;
  display: flex;
  color: #fff;
  margin-bottom: 10px;
  border-radius: 10px;
}
.cart {
  min-height: 100%;
  display: flex;
  align-items: center;
}
.product {
  display: flex;
  align-items: center;
  gap: 0 20px;
  img {
    max-height: 100px;
    object-fit: cover;
  }
}
p {
  font-size: 18px;
}

.v-middle {
  vertical-align: middle !important;
}
.headerStyle {
  color: #fff !important;
}
.vgt-table {
  border: none !important;
}
input {
  border: 1px solid $dark;
  border-radius: 15px;
  width: 80px;
  outline: none;
  padding-left: 10px;
}
</style>