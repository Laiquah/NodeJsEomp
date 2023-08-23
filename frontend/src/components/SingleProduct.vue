<template>
  <div>
    <div v-if="product">
      <h1>{{ product.prodName }}</h1>
      <div>
        <img :src="product.prodUrl" :alt="product.prodName" />
        <p>Category: {{ product.category }}</p>
        <p>Description: {{ product.prodDesc }}</p>
        <p>Price: R{{ product.price }}</p>
        <!-- Add other product details as needed -->
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/SpinnerComp.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    },
  },
};
</script>

<style lang="scss" scoped></style>
