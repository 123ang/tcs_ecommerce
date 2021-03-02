import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

    isLoggedIn: false,
    Email: false,
    AccountID: "",
    language: "",
    Credit: "",
    Product: "",
    Cart: []
  },
  getters: {
    
  },
  mutations: {
    IsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },

    Email(state, data) {
      state.Email = data;
    },
    AccountID(state,data) {
      state.AccountID = data
    },
    language(state,data) {
      state.language = data
    },
    Product(state,data) {
      state.Product = data
    },
    Credit(state,data) {
      state.Credit = data
    },
    add_to_cart(state,data) {
      let index = state.Cart.findIndex(item => item.id == data.id);
      console.log(index)
      if(index >= 0){
        state.Cart[index].quantity = parseInt(state.Cart[index].quantity) + parseInt(data.quantity);
      }    
      else {
        state.Cart.push(data)
      }

    },
    drop_from_cart(state,data) {
     
      state.Cart.splice(data, 1);
    },
    clean_cart(state) {
      while(state.Cart.length > 0) {
        state.Cart.pop();
      }
    }
      
  },
  actions: {

  },
  plugins: [new VuexPersistence().plugin]

})
export default store