<template>
    <div>
        <h1>Your Cart</h1>

        <CartItemCart
            v-for="product in products"
            :key="product.id"
            :product="product"
         />

         <CartSummaryPaymentCart

          />

    </div>
</template>
<script>
import CartItemCart from '../components/cart/CartItemCart.vue'
import CartSummaryPaymentCart from '../components/cart/CartSummaryPaymentCart.vue'
export default{
    components:{
        CartItemCart,
        CartSummaryPaymentCart
    },
    computed:{
        products(){
            return this.$store.getters.cartItems
        }
    }
}
</script>