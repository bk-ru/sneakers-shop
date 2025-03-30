<template>
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>Цена: {{ product.price }} ₽</p>
      <button 
      class="cart-button"
      @click="addToCart"
      :class="{ 'in-cart': isInCart }"
    >
      <i class='bx bx-cart'></i>
      {{ isInCart ? 'В корзине' : 'В корзину' }}
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.store'
import { computed } from 'vue'

const props = defineProps(['product'])
const cartStore = useCartStore()

const isInCart = computed(() => 
  cartStore.items.some(item => item.id === props.product.id)
)

const addToCart = () => {
  cartStore.addToCart(props.product)
}
</script>