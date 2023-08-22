import { createStore } from "vuex";
import axios from "axios";
const miniURL = "https://nodjs-eomp.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
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
      console.log(products)
    },
    setProduct(state, product) {
      state.product = product;
      console.log(product)
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
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
    async createUser(context) {
      try{
        const { data } = await axios.post(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateUser(context) {
      try{
        const { data } = await axios.patch(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context) {
      try{
        const { data } = await axios.delete(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async createProduct(context, payload) {
      console.log("REACHED")
      try{
        const { res } = await axios.post(`${miniURL}product`, payload)
        const {results, err} = await res.data
        if(results){
          context.commit('setProduct', results[0])
          context.commit("setSpinner", false);
        } else{
          context.commit('setMsg', msg)
        }
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async updateProduct(context, payload, prodID) {
      try{
        const { res } = await axios.patch(`${miniURL}product/${prodID}`, payload)
        const {msg, err} = await res.data
        if(err){
          alert("An error has occured, please try again")
        }
        if(msg){
          context.commit(setProduct, msg)
          context.commit('setMsg', msg)
        } else{
          context.commit("setMsg", "An error occured")
        }
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async deleteProduct(context, prodID) {
      console.log("Reached")
      try{
        const { res } = await axios.delete(`${miniURL}product/${prodID}`)
        const {msg, err} = await res.data
        if(err){
          alert('An error has occured, please try again')
        }
        if(msg){
          context.commit('setProduct', msg)
          context.commit("setSpinner", false)
        } else{
          context.commit('setMsg', "An error occured")
        }
      } catch (e) {
        context.commit("setMsg", "an error occured")
      }
    }
  },
  modules: {},
});
