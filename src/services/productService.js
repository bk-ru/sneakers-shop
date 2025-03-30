import productsData from '@/data/products.json'

export default {
  async getProducts(page = 1, limit = 8) {
    // Вычисляем индексы для пагинации
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    
    // Получаем пагинированный список
    const paginatedProducts = productsData.products.slice(startIndex, endIndex)
    
    // Форматируем цены
    return {
      products: paginatedProducts.map(p => ({
        ...p,
        price: this.formatPrice(p.price),
        oldPrice: p.oldPrice ? this.formatPrice(p.oldPrice) : null
      })),
      total: productsData.products.length // Общее количество для пагинации
    }
  },

  formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price)
  }
}