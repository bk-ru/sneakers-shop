<template>
    <footer class="footer">
      <div class="footer__container">
        <!-- Колонка 1: Контакты -->
        <div class="footer__column">
          <h3 class="footer__title">Контакты</h3>
          <ul class="footer__list">
            <li>Адрес: Гороховский переулок, 4, корп. 1</li>
            <li>Телефон: <a href="tel:+79999999999">+7 (999) 999-99-99</a></li>
            <li>Часы работы: 10:00 - 18:00, ПН-ПТ</li>
          </ul>
          <div class="footer__social">
            <p>Подпишитесь на нас:</p>
            <div class="social-icons">
              <a href="#" class="social-link"><i class='bx bxl-vk'></i></a>
              <a href="#" class="social-link"><i class='bx bxl-telegram'></i></a>
            </div>
          </div>
        </div>
  
        <!-- Колонка 2: Навигация -->
        <div class="footer__column">
          <h3 class="footer__title">Мы</h3>
          <ul class="footer__list">
            <li><router-link to="/about">О нас</router-link></li>
            <li><router-link to="/delivery">Информация о доставке</router-link></li>
            <li><router-link to="/privacy">Политика конфиденциальности</router-link></li>
            <li><router-link to="/terms">Условия использования</router-link></li>
            <li><router-link to="/contacts">Свяжитесь с нами</router-link></li>
          </ul>
        </div>
  
        <!-- Колонка 3: Оплата -->
        <div class="footer__column">
          <h3 class="footer__title">Безопасная оплата</h3>
          <div class="payment-icons">
            <img src="@/assets/payment/mir.png" alt="МИР">
            <img src="@/assets/payment/visa.png" alt="VISA">
            <img src="@/assets/payment/mastercard.png" alt="Mastercard">
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    background-color: #E3E6F3;
    margin-top: 48px;
  }
  
  .footer__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .footer__column {
    flex: auto;
  }
  
  .footer__column:last-child {
    margin-right: 0;
  }
  
  .footer__title {
    font-size: 14px;
    margin-bottom: 0;
  }
  
  .footer__list {
    font-size: 12px;
    list-style: none;
    padding-left: 4px;
    margin-top: 4px;
  }
  
  .footer__list li {
    margin-bottom: 8px;
  }
  
  .footer__list a,
  .footer__list a:visited {
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer__list a:hover {
    color: #24b1f5
  }
  
  .footer__social {
    font-weight: bold;
    margin-top: 10;
  }
  
  .footer__social p {
    margin-bottom: 5px;
}
  
  .social-icons {
    display: flex;
    gap: 12px;
    padding-left: 4px;
  }
  
  .social-link {
    font-size: 24px;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: #24b1f5
  }
  
  .payment-icons {
    margin-left: 4px;
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .payment-icons img {
    margin-top: 4px;
    height: 18px;
  }
  </style>