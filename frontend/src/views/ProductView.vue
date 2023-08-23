<template>
  <div>
    <h1>products</h1>
    <form class="d-flex mb-2" role="search">
      <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn" type="submit">Search</button>
    </form>
    <div class="row" v-if="products">
      <div class="col-4" v-for="product in products" :key="product">
        <div class="card" id="test" style="width: 100%; height: 100%">
          <img
            :src="product.prodUrl"
            class="card-img-top img-fluid"
            id="image"
            :alt="product.prodName"
          />
          <div class="card-body">
            <div class="title">
              <!-- 15% -->
              <h5 class="card-title">{{ product.prodName }}</h5>
            </div>
            <div class="category">
              <!-- 15% -->
              <p class="card-text">category: {{ product.category }}</p>
            </div>
            <div class="description">
              <!-- 50% -->
              <p class="card-text">"{{ product.prodDesc }}"</p>
            </div>
            <div class="price">
              <!-- 10% -->
              <p class="card-text">price: R{{ product.price }}</p>
            </div>
            <div class="quantity">
              <!-- 10% -->
              quantity:
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div class="button">
              <button @click="viewProduct(product.prodID)" class="btn">
                view more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
export default {
  components: {
    Spinner,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    viewProduct(prodID) {
      const chosenProd = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSelectedProduct", chosenProd);
      this.$router.push({ name: "ProductView", params: { prodID: prodID } });
    },
  },
};
</script>

<style scoped>
#image {
  aspect-ratio: 1/1;
  width: 10rem;
}

.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  box-shadow: 4px 4px black;
}

.card {
  height: 50rem !important;
  margin-bottom: 5rem;
}

.category {
  height: 15%;
}

.price {
  height: 10%;
}
.quantity {
  height: 10%;
}

.description {
  height: 30%;
}

.card-text {
  height: 132px;
  overflow: auto;
}

.title {
  height: 15%;
}

.button {
  height: 10%;
}
</style>
