<template>
  <div class="">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Cari produk..."
      class="w-full p-2 mb-4 border border-gray-300 rounded"
    />

    <div class="flex flex-col space-y-2">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="relative border border-gray-200 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex items-center justify-between gap-x-4">
          <img :src="product.image" :alt="product.title" class="w-40 object-cover rounded mb-2" />
          <div>
            <h3 class="text-lg font-semibold mb-1">{{ product.title }}</h3>
            <p class="text-gray-600 mb-2 description">{{ product.description }}</p>
            <p class="text-gray-800 font-semibold mb-2 text-xl">${{ product.price.toFixed(2) }}</p>
            <p class="text-sm text-gray-500 mb-2">Kategori: {{ product.category }}</p>
            <div class="flex items-center mb-2">
              <span class="text-yellow-500 mr-1">★</span>
              <span>{{ product.rating.rate.toFixed(1) }} ({{ product.rating.count }} ulasan)</span>
            </div>

            <!-- Lihat Detail -->
            <nuxt-link
              :to="`/product/${product.id}`"
              class="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Lihat Detail
            </nuxt-link>  
          </div>
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

</style>