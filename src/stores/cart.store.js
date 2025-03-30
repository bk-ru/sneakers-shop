import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Добавление товара
  const addToCart = (product) => {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // Удаление товара
  const removeFromCart = (productId) => {
    items.value = items.value.filter(item => item.id !== productId)
  }

  // Изменение количества
  const updateQuantity = (productId, newQuantity) => {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = Math.max(1, newQuantity)
    }
  }

  // Очистка корзины
  const clearCart = () => {
    items.value = []
  }

  // Вычисляемые свойства
  const totalItems = computed(() => 
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => {
      // Удаляем пробелы и преобразуем в число
      const price = Number(item.price.toString().replace(/\s/g, ''))
      return sum + (price * item.quantity)
    }, 0)
  })

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  }
})