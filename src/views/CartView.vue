<template>
  <div class="cart-page">
    <h1>Ваша корзина</h1>
    
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      Корзина пуста
      <router-link to="/shop" class="continue-shopping">
        Продолжить покупки
      </router-link>
    </div>

    <div v-else>
      <div class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="item-image">
          
          <div class="item-details">
            <h3>{{ item.brand }} {{ item.title }}</h3>
            <div class="price">{{ formatPrice(item.price) }} ₽ × {{ item.quantity }}</div>
          </div>
          
          <div class="item-controls">
            <div class="quantity-control">
              <button @click="decreaseQuantity(item.id)">−</button>
              <input 
                type="number" 
                v-model.number="item.quantity" 
                @change="updateQuantity(item.id, item.quantity)"
                min="1"
              >
              <button @click="increaseQuantity(item.id)">+</button>
            </div>
            
            <button @click="removeItem(item.id)" class="remove-btn">
              Удалить
            </button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="summary-row">
          <span>Товаров:</span>
          <span>{{ cartStore.totalItems }} шт.</span>
        </div>
        <div class="summary-row total">
          <span>Итого:</span>
          <span>{{ formatPrice(cartStore.totalPrice) }} ₽</span>
        </div>
        
        <button @click="checkout" class="checkout-btn">
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.store'
import { formatPrice } from '@/utils/formatPrice'

const cartStore = useCartStore()

const increaseQuantity = (productId) => {
  const item = cartStore.items.find(item => item.id === productId)
  if (item) cartStore.updateQuantity(productId, item.quantity + 1)
}

const decreaseQuantity = (productId) => {
  const item = cartStore.items.find(item => item.id === productId)
  if (item) cartStore.updateQuantity(productId, item.quantity - 1)
}

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, Number(quantity))
}

const removeItem = (productId) => {
  cartStore.removeFromCart(productId)
}

const checkout = () => {
  alert('Заказ оформлен! Спасибо за покупку!')
  cartStore.clearCart()
}
</script>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.empty-cart {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
}

.continue-shopping {
  display: block;
  margin-top: 20px;
  color: #42b983;
  text-decoration: none;
}

.cart-items {
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  gap: 20px;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin: 0 0 10px 0;
}

.price {
  font-weight: bold;
  color: #2c3e50;
}

.item-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-control button {
  width: 30px;
  height: 30px;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.quantity-control input {
  width: 50px;
  height: 30px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid #ddd;
}

.remove-btn {
  background: none;
  border: none;
  color: #ff4757;
  cursor: pointer;
  padding: 5px;
}

.cart-summary {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin-left: auto;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.summary-row.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s;
}

.checkout-btn:hover {
  background: #369f6e;
}
</style>