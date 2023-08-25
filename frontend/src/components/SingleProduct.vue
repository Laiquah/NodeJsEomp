<template>
  <div>
    <div v-if="product">
      <h1>{{ product.prodName }}</h1>
      <div>
        <img :src="product.prodUrl" :alt="product.prodName" loading="lazy" class="img-fluid" id="image" />
        <p>Category: {{ product.category }}</p>
        <div>
          Description: {{ product.prodDesc }}
        </div>
        <p>Price: R{{ product.price }}</p>
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

<style scoped>
#image{
  width: 20rem;
}

h1{
  
}
</style>
