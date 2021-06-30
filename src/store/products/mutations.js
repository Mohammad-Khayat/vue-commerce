export default {
  Set_Products(state, payload) {
    state.products = payload;
  },
  Set_Categories(state, payload) {
    state.categories = payload;
  },
  Set_Latest(state, payload) {
    state.latest = payload;
  },
  Set_Details(state, payload) {
    state.details = payload;
  },
  Set_Cart_Prodcut(state, payload) {
    if (!state.cart.products.some((el) => el.id === payload.id)) {
      payload.quantity++;
      payload.totalPrice += payload.price;
      state.cart.products.push(payload);
    } else {
      const founded = state.cart.products.find((el) => el.id == payload.id);
      founded.quantity++;
      founded.totalPrice + founded.price;
    }
  },
  Delete_Cart_Product(state, payload) {
    if (payload == "all") {
      state.cart.products = [];
    } else {
      state.cart.products = state.cart.products.filter(
        (el) => el.id !== payload
      );
    }
  },
};
