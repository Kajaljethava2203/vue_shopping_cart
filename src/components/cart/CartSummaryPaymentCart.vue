<template>
    <div class="cart-item-cart">
        <h3>Cart Total: Rs. {{ cart_total.toFixed(2) }}</h3>

        <button class="view-product-button">Pay by credit card</button>
    </div>
</template>
<script>
    export default{
        computed:{
        cart_total(){
            return this.$store.getters.cartTotal
        }
      }
    }
</script>