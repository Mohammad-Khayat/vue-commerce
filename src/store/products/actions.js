import axios from "axios";
export default {
  async Get_Products({ commit }) {
    const response = await axios.get("https://fakestoreapi.com/products");
    const categories= await (await axios.get('https://fakestoreapi.com/products/categories')).data;
    const products = [];
    response.data.forEach((element) => {
      const product = {
        title: element.title.substring(0, 10),
        category: element.category,
        description: element.description.substring(0, 40),
        image: element.image,
        price: element.price,
        id: element.id,
      };
      products.push(product);
    });
    console.log(products);
    commit('Set_Categories',[...categories,'All'])
    commit("Set_Products", products);
  },

  async Get_Latest({ commit }) {
    const products = [];
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=4"
    );
    response.data.forEach((el) => {
      const product = {
        title: el.title.substring(0, 11),
        category: el.category,
        description: el.description.substring(0, 50),
        image: el.image,
        price: el.price,
        id: el.id,
      };
      products.push(product);
    });
    commit("Set_Latest", products);
  },

  async Get_Product_Details({ commit }, payload) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${payload}`
    );
    commit("Set_Details", response.data);
  },
  Get_Cart_Product({ commit }, payload) {
    const newCartItem = {
      ...payload,
      quantity: 1,
    };
    commit("Set_Cart_Prodcut", newCartItem);
  },
  Delete_Cart_Product({commit},payload){
    commit('Delete_Cart_Product',payload)
  },
};
