<template>
  <div>
    <h1>products</h1>
      <form class="d-flex mb-2 searchBTN" role="search">
          <input class="form-control" type="search" id="search" placeholder="Search" aria-label="Search" v-model="searchProducts" />
      </form>
    <div class="sort-dropdown">
      <label for="sort">Sort by: </label>
      <select id="sort" v-model="sortBy">
        <option value="default">Default</option>
        <option value="price">Price</option>
        <option value="category">Category</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
      <button @click="toggleSortDirection">
        {{ sort === 'asc' ? '↑' : '↓' }}
      </button>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 flex" v-if="products">
      <div class="col flex" v-for="product in filteredProducts" :key="product">
        <div class="card flex" id="test">
          <center>
            <img :src="product.prodUrl" class="card-img-top img-fluid" id="image" loading="lazy"
              :alt="product.prodName" />
          </center>
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
    filteredProducts() {
      let filtered = this.products
      if(this.searchProducts !== ''){
        filtered = filtered.filter(product => product.prodName.toLowerCase().includes(this.searchProducts.toLowerCase()) || 
        product.category.toLowerCase().includes(this.searchProducts.toLowerCase()))
      }
      if(this.sortBy === 'price'){
        filtered = filtered.sort((a, b)=> (this.sort === 'asc' ? a.price - b.price : b.price - a.price))
      } else if(this.sortBy === 'category'){
        filtered = filtered.sort((a, b)=> a.category.localeCompare(b.category) * (this.sort === 'asc' ? 1 : -1))
      } else if(this.sortBy === 'alphabetical'){
        filtered = filtered.sort((a, b)=> a.prodName.localeCompare(b.prodName) * (this.sort === 'asc' ? 1 : -1))
      }

      return filtered
    },

  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    searchProducts(e) {
      e.preventDefault()
      this.searchProducts = this.searchProducts.trim()
    },
    toggleSortDirection() {
      this.sort = this.sort === 'asc' ? 'desc' : 'asc'
    },
    clearSearch() {
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
    return {
      searchProducts: '',
      sortBy: "",
      sort: ""
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

#image {
  aspect-ratio: 1/1;
  width: 20rem;
  height: 15rem;
  margin-top: .5rem;
}

#search{
  width: 20rem;
  display: flex !important;
  justify-content: center !important;
}

.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  box-shadow: 4px 4px black;
}

.btn:hover {
  background-color: black;
  box-shadow: 4px 4px white;
  color: white;
}

.card {
  margin-bottom: 2rem;
  width: 75% !important;
}

.card-title {
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
  margin-top: .1rem;
  margin-bottom: .8rem;
}

.description {
  height: 25%;
}

.card-text {
  height: 50px;
  overflow: auto;
}

.title {
  height: 15%;
}

.button {
  height: 10%;
}

.row {
  --bs-gutter-x: 0;
  display: flex !important;
  justify-content: space-between !important;
}

@media screen and (max-width:300px) {
  .card {
    width: 295px !important;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .searchBTN {
    width: 290px !important;
  }

  .row {
    --bs-gutter-x: 0;
  }
}

@media screen and (max-width:700px) {
  .searchBTN {
    width: 690px;
  }

  #image {
    width: 15rem;
  }

  .quantity {
    margin-top: .1rem;
    margin-bottom: .5rem;
  }

  .card {
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .row {
    --bs-gutter-x: 0;
  }
}

@media screen and (min-width: 1592px) {
  .card {
    width: 1591px;
  }

}
</style>
