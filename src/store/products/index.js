import actions from "./actions.js";
import mutations from "./mutations.js";
export default {
  state: {
    products: [],
    latest: [],
    categories: [],
    details: {},
    cart: {
      products: [],
      totalPrice: 0,
    },
    filtersObject: {
      searchKeyword: "",
      maxPrice: null,
      category: "",
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    latest(state) {
      return state.latest;
    },
    details(state) {
      return state.details;
    },
    totalPrice(state) {
      let totalPrice=0;
      state.cart.products.forEach((element) => {
        totalPrice += element.price*element.quantity
      });
      return totalPrice;
    },
  },
  actions,
  mutations,
};
