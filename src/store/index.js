import { createStore } from 'vuex'
function updateLocalStorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export default createStore({
  state: {
    cart:[]
  },
  getters:{
    productQuantify: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantify
      else return null
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((a,b) => a + (b.price * b.quantify),0)
    }
  },
  mutations: {
    addToCart(state,product){
      let item = state.cart.find(i => i.id === product.id)

      if (item){
        item.quantify++
      }else {
        state.cart.push({...product,quantify: 1})
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart(state,product){
      let item = state.cart.find(i => i.id === product.id)

      if (item){
        if (item.quantify > 1){
          item.quantify--
        }else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart')
      if (cart){
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
