<template>
  <div>
    <h1>products</h1>
    <form class="d-flex mb-2 searchBTN" role="search">
      <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchProducts"
      />
      <button class="btn" type="submit" @click="searchProducts">Search</button>
      <button class="btn" @click="clearSearch">Clear Search</button>
    </form>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 flex" v-if="products">
      <div class="col flex" v-for="product in filteredProducts" :key="product">
        <div class="card flex" id="test">
          <img
            :src="product.prodUrl"
            class="card-img-top img-fluid"
            id="image"
            loading="lazy"
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
    filteredProducts(){
      if (this.searchProducts === ''){
        return this.products
      } else{
        return this.products.filter(product => product.prodName.toLowerCase().includes(this.searchProducts.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchProducts.toLowerCase()))
      } 
    },
    searchWatch(){
      return this.products.filter(w =>w.name.includes(this.searchWatches))
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    searchProducts(e){
      e.preventDefault()
      this.searchProducts = this.searchProducts.trim()
    },
    clearSearch(){
      this.searchProducts = ''
    },
    viewProduct(prodID) {
      const chosenProd = this.products.find(
        (product) => product.prodID === prodID
      );
      this.$store.commit("setSelectedProduct", chosenProd);
      this.$router.push({ name: "ProductView", params: { prodID: prodID } });
    }
  },
  data() {
    return{
      searchProducts: '',
    }
  }
};
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

#image {
  aspect-ratio: 1/1;
}

.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  box-shadow: 4px 4px black;
}

.card {
  height: 44rem !important;
  margin-bottom: 5rem;
  width: 75% !important;
}

.card-title{
  text-decoration: underline;
}

.category {
  height: 10%;
}

.price {
  height: 10%;
}
.quantity {
  height: 10%;
}

.description {
  height: 25%;
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

.row{
  --bs-gutter-x: 0;
  display: flex !important;
  justify-content: space-between !important ;
}

@media screen and (max-width:300px) {
  .card{
    width: 295px !important;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .searchBTN{
    width: 290px !important;
  }

  .row{
    --bs-gutter-x: 0;
  }
}

@media screen and (max-width:700px) {
  .searchBTN{
    width: 690px;
  }

  .card{
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .row{
    --bs-gutter-x:0;
  }
}
</style>
