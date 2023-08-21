<template>
    <div>
        <h1>products</h1>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="row" v-if="products">
            <div class="col-3" v-for="product in products" :key="product">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top img-fluid" :alt="product.prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }}</h5>
                      <p class="card-text">category: {{ product.category }}</p>
                      <p class="card-text">price: R{{ product.price }}</p>
                      quantity: <select>
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
                  </div>
            </div>
        </div>
        <div class="row" v-else>
            <Spinner/>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue'
    export default {
        components: {
            Spinner
        },
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted () {
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>

</style>