import { createStore } from "vuex";
import axios from "axios";
const miniURL = "https://nodjs-eomp.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    selectedProduct: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      console.log(products);
    },
    setProduct(state, product) {
      state.product = product;
      console.log(product);
    },
    setSelectedProduct(state, product){
      state.selectedProduct = product
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    }
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${miniURL}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${miniURL}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchProduct(context) {
      try {
        const { data } = await axios.get(`${miniURL}product`);
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async register(context, payload) {
      try {
        const res = await axios.post(`${miniURL}register`, payload);
        const { msg, err } = await res.data;
        if (err) {
          context.commit("setMsg", "Something went wrong");
        }
        if (msg) {
          context.dispatch("fetchUsers")
          context.commit("setUser", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateUser(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${miniURL}user/${payload.userID}`, payload.data);
        const { msg, err } = res.data
        if(msg){
          context.dispatch("fetchUsers")
          context.commit("setUser", msg)
        } else{
          context.commit("setMsg", e)
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context, id) {
      try {
        const { res } = await axios.delete(`${miniURL}user/${id}`);
        const {msg, err} = res.data
        if(err){
          console.error("An error has occured: ", err)
          context.commit("setMsg", "An error has occured")
        }
        if(msg){
          context.dispatch("fetchProducts")
          context.commit('setUser', msg)
          console.log("User deleted successfully")
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async createProduct(context, payload) {
      console.log("REACHED");
      try {
        const { res } = await axios.post(`${miniURL}product`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${miniURL}product/${payload.prodID}`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (err) {
          console.log("An error has occured: ", err);
          context.commit("setMsg", err);
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setMsg", "Successfully updated product.");
        }
      } catch (e) {
        context.commit("setMsg", e);
      }
    },
    async deleteProduct(context, prodID) {
      console.log("reached");
      try {
        const { res } = await axios.delete(`${miniURL}product/${prodID}`);
        const { msg, err } = await res.data;
        if (err) {
          alert("an error has occured, please try again");
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", "An error occured");
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
  },
  modules: {},
});
