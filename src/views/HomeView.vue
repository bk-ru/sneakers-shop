<template>
  <div class="home">
    <!-- Баннер с текстом -->
    <section class="hero-banner">
      <div class="banner-content">
        <h1>Супер выгодно</h1>
        <p>Скидки на все товары</p>
        <p>Сэкономьте больше с купонами и скидками до 70%!</p>
      </div>
    </section>

    <!-- Секция преимуществ -->
    <section class="features-section">
      <div class="feature-box" v-for="(feature, index) in features" :key="index">
        <img :src="feature.icon" :alt="feature.title">
        <h6 :style="{ backgroundColor: colors[index] }">{{ feature.title }}</h6>
      </div>
    </section>
  </div>

  <!-- Секция подписки на рассылку -->
  <section class="newsletter-section">
      <div class="newsletter-container">
        <div class="newsletter-text">
          <h2>Подписаться на нашу рассылку новостей</h2>
          <p>Получайте обновления по электронной почте о нашем последнем поступлении и специальных предложениях</p>
        </div>
        <form class="newsletter-form" @submit.prevent="handleSubscribe">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Ваш email адрес" 
            required
          >
          <button type="submit">Подписаться</button>
        </form>
      </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const colors = ref(['#cdebbc', '#d1e8f2', '#cdd4f8', '#f6dbf6', '#fff2e5', '#f8e1e1']);

const features = ref([
  { title: 'Бесплатная доставка', icon: '/src/assets/features/f1.png' },
  { title: 'Онлайн заказ', icon: '/src/assets/features/f2.png' },
  { title: 'Экономия денег', icon: '/src/assets/features/f3.png' },
  { title: 'Промо-акции', icon: '/src/assets/features/f4.png' },
  { title: 'Продажа с улыбкой', icon: '/src/assets/features/f5.png' },
  { title: 'Поддержка 24/7', icon: '/src/assets/features/f6.png' }
]);

const email = ref('');

const handleSubscribe = () => {
  alert(`Спасибо за подписку! На адрес ${email.value} будут приходить наши новости.`);
  email.value = '';
};

</script>

<style scoped>
.home {
}

/* Стили для баннера */
.hero-banner {
  position: relative;
  height: 400px;
  background-image: url('@/assets/main-banner.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.banner-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
}

.banner-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-content p {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Стили для секции преимуществ */
.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  max-width: 1200px;
  margin: 28px auto;
}

.feature-box {
  flex: 1 1 100px;
  max-width: 100%;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}

.feature-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-box img {
  width: 112px;
  height: 112px;
  object-fit: contain;
}

.feature-box h6 {
  color: #2091ca;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-block;
  font-size: 0.9rem;
  margin-top: 10px;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero-banner {
    height: 300px;
  }
  
  .banner-content h1 {
    font-size: 2rem;
  }
  
  .banner-content p {
    font-size: 1.2rem;
  }
  
  .feature-box {
    flex: 1 1 150px;
  }
}

/* Стили для секции подписки */
.newsletter-section {
  background-color: #f3f4f6;
  padding: 48px; 
  margin-top: 32px;
}

.newsletter-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.newsletter-text h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.newsletter-text p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.newsletter-form input {
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 12px 30px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.newsletter-form button:hover {
  background-color: #369f6e;
}

/* Адаптивность */
@media (max-width: 600px) {
  .newsletter-form {
    flex-direction: column;
    align-items: center;
  }
  
  .newsletter-form input,
  .newsletter-form button {
    width: 100%;
    max-width: 100%;
  }
}

</style>