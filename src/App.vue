<template>
    <div class="app">
        <Header />
        <main class="main-content">
        <router-view /> <!-- Здесь будут страницы -->
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
/* Добавляем отступ для основного контента (чтобы не залезал под fixed header) */
.main-content {
  padding-top: 80px;
  min-height: calc(100vh - 140px); /* 80px (header) + 60px (footer) */
}

/* Общие стили для ссылок */
a {
  text-decoration: none;
}
</style>
