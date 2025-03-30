<template>
  <div class="shop-page">
    <!-- Баннер с CTA -->
    <section class="shop-hero">
      <div class="hero-content">
        <h1>СЕЗОН РАСПРОДАЖ</h1>
      </div>
    </section>

    <!-- Сетка товаров -->
    <section id="products" class="products-grid">
      <div 
        v-for="(product, index) in products" 
        :key="index" 
        class="product-card"
      >
        <div class="product-badge" v-if="product.isNew">NEW</div>
        <img 
          :src="product.image" 
          :alt="product.title" 
          class="product-image"
        >
        <div class="product-details">
          <div class="brand-rating">
            <span class="brand">{{ product.brand }}</span>
            <div class="rating">
              ★★★★★ <span>({{ product.reviews }})</span>
            </div>
          </div>
          <h3 class="title">{{ product.title }}</h3>
          <div class="price-cart">
            <div class="pricing">
              <span class="current-price">{{ product.price }} ₽</span>
              <span v-if="product.oldPrice" class="old-price">
                {{ product.oldPrice }} ₽
              </span>
            </div>
            <button 
              class="cart-button"
              @click="addToCart(product)"
              :class="{ 'in-cart': product.inCart }"
            >
              <i class='bx bx-cart'></i>
              {{ product.inCart ? 'В корзине' : 'В корзину' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Пагинация -->
    <div class="pagination">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="pagination-button"
      >
        Назад
      </button>
      
      <span class="page-indicator">
        Страница {{ currentPage }} из {{ totalPages }}
      </span>
      
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages"
        class="pagination-button"
      >
        Вперед
      </button>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart.store'
import productService from '@/services/productService'

const cartStore = useCartStore()
const currentPage = ref(1)
const itemsPerPage = 8
const products = ref([]) // Изменили название переменной
const totalProducts = ref(0)

// Загрузка продуктов с пагинацией
const loadProducts = async () => {
  const response = await productService.getProducts(currentPage.value, itemsPerPage)
  products.value = response.products.map(p => ({
    ...p,
    inCart: cartStore.items.some(item => item.id === p.id)
  }))
  totalProducts.value = response.total
}

// Вычисляемые свойства
const totalPages = computed(() => {
  return Math.ceil(totalProducts.value / itemsPerPage)
})

// Методы пагинации
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    loadProducts()
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    loadProducts()
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const addToCart = (product) => {
  product.inCart = true
  cartStore.addToCart({
    ...product,
    quantity: 1
  })
}

onMounted(loadProducts)
</script>


<style scoped>
.shop-page {
}

.shop-hero {
  background-image: url('@/assets/shop-banner.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: top;
  color: white;
  margin-bottom: 48px;

  .hero-content {
    max-width: 800px;
    padding: 0 20px;
    color: #4e522eb6;
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
  }
}

.discount-badge {
  background: #ff4757;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: bold;
  animation: pulse 2s infinite;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.product-card {
  position: relative;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.2);
  }
}

.product-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #42b983;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  z-index: 1;
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.product-details {
  padding: 20px;
}

.brand-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .brand {
    color: #666;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  .rating {
    color: #ffd700;
    font-size: 0.9rem;
    
    span {
      color: #666;
      margin-left: 5px;
    }
  }
}

.price-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  .pricing {
    .current-price {
      font-size: 1.3rem;
      font-weight: bold;
      color: #2c3e50;
    }

    .old-price {
      font-size: 0.9rem;
      color: #999;
      text-decoration: line-through;
      margin-left: 8px;
    }
  }
}

.cart-button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &.in-cart {
    background: #3498db;
  }

  &:hover {
    background: #369f6e;
  }
}

/* Пагинация */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
}

.pagination-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination-button:hover:not(:disabled) {
  background-color: #369f6e;
}

.pagination-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.page-indicator {
  font-size: 1rem;
  color: #333;
}


@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .shop-hero {
    height: 400px;
    
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.2rem;
    }
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>