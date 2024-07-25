<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Daftar Produk</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue';

export default {
  components: {
    ProductList,
  }
}
</script>
