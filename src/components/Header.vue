<template>
    <header class="header">
      <div class="header__logo">
        <img src="@/assets/logo.png" alt="Логотип">
      </div>
      <nav class="header__nav">
        <router-link to="/">Главная</router-link>
        <router-link to="/shop">Магазин</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/auth">Авторизация</router-link>
      </nav>
      <div class="header__cart">
        <router-link to="/cart" class="cart-link">
          <i class='bx bx-shopping-bag'></i>
            <span v-if="cartStore.totalItems > 0" class="cart-count">
                {{ cartStore.totalItems }}
            </span>
        </router-link>
      </div>
    </header>
  </template>
  
  <script setup>
    import { useCartStore } from '@/stores/cart.store'
    const cartStore = useCartStore()
  </script>
  
  <style scoped>
.cart-link {
  position: relative;
  color: #333;
  font-size: 1.5rem;
  margin-right: 30px;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
  
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #E3E6F3;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    z-index: 1000;
  }
  
  .header__logo img {
    height: 48px;
  }
  
  .header__nav {
    display: flex;
    gap: 20px;
    margin-left: 40px;
  }
  
  .header__nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  .header__nav a:hover {
    transition: color 0.5s ease;
    color: #24b1f5
  }
  
  .header__nav a.router-link-active { 
    color: #24b1f5 /* Цвет активной ссылки */
  }
  
  .header__cart {
    margin-left: auto;
    font-size: 32px;
  }
  
  .header__cart a {
    color: #333;
  }
  </style>