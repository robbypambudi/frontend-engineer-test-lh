<template>
  <div class="">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Cari produk..."
      class="w-full p-2 mb-4 border border-gray-300 rounded"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="relative border border-gray-200 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img :src="product.image" :alt="product.title" class="w-full h-40 object-cover rounded mb-2" />
        <h3 class="text-lg font-semibold mb-1">{{ product.title }}</h3>
        <p class="text-gray-600 mb-2 description">{{ product.description }}</p>
        <p class="text-gray-800 font-semibold mb-2 text-xl">${{ product.price.toFixed(2) }}</p>
        <p class="text-sm text-gray-500 mb-2">Kategori: {{ product.category }}</p>
        <div class="flex items-center mb-2">
          <span class="text-yellow-500 mr-1">★</span>
          <span>{{ product.rating.rate.toFixed(1) }} ({{ product.rating.count }} ulasan)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      searchQuery: '',
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.$get('https://fakestoreapi.com/products');
      this.products = response;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
</script>

<style scoped>
.search-input {
  @apply w-full p-2 mb-4 border border-gray-300 rounded;
}

.product-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}

.product-card {
  @apply relative border border-gray-200 rounded-lg p-4 bg-white shadow-md;
}

.product-title {
  @apply text-lg font-semibold mb-1;
}

.description {
  @apply text-gray-600 mb-2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price {
  @apply text-gray-800 font-semibold mb-2;
}

.product-category {
  @apply text-sm text-gray-500 mb-2;
}

.product-rating {
  @apply flex items-center mb-2;
}

.product-rating-star {
  @apply text-yellow-500 mr-1;
}

.product-card:hover .detail-button {
  @apply opacity-100;
}

.detail-button {
  @apply absolute bottom-4 left-4 bg-blue-500 text-white py-1 px-3 rounded opacity-0 hover:opacity-100 transition-opacity duration-300;
}
</style>
