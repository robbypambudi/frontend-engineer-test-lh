<template>
  <div class="container mx-auto p-4">
    <div>
      <nuxt-link to="/" class="text-blue-500">← Back to Home</nuxt-link>
    </div>
    <hr />

    <div>
      <h1 class="text-2xl font-semibold mt-4">Product Detail</h1>
    </div>
    <div v-if="product" class="grid grid-cols-3 mt-4 shadow-sm p-2 border rounded-sm">
      <img :src="product.image" :alt="product.title" class="h-60 m-auto" />
      <div class="col-span-2">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p><strong>Category:</strong> {{ product.category }}</p>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <p><strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      </div>

    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await response.json();
    return { product };
  },
};
</script>