<template>
  <div>
    <h1>Users</h1>
    <addUser/>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>surname</th>
          <th>age</th>
          <th>gender</th>
          <th>role</th>
          <th>email address</th>
          <th>profile image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.userID">
        <tr v-if="users">
           <td>{{ user.userID }}</td>
           <td>{{ user.firstName }}</td>
           <td>{{ user.lastName }}</td>
           <td>{{ user.userAge }}</td>
           <td>{{ user.gender }}</td>
           <td>{{ user.userRole }}</td>
           <td>{{ user.emailAdd }}</td>
           <td><img :src="user.userProfile" :alt="user.firstName" loading="lazy" class="img-fluid image"></td>
           <td><button class="btn">edit</button><button class="btn">delete</button></td> 
        </tr>
        <tr v-else>
            <Spinner/>
        </tr>
      </tbody>
    </table>
    <div>
        <h1>products</h1>
        <addProduct/>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>category</th>
            <th>description</th>
            <th>product image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product">
          <tr v-if="products">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.prodDesc }}</td>
            <td><img :src="product.prodUrl" :alt="product.prodUrl" class="img-fluid image" loading="lazy"></td>
            <td>
              <updateProduct :product="product"/>
              <button @click="deleteProduct(product.prodID)" class="btn">delete</button></td>
          </tr>
          <tr v-else>
            <Spinner/>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue'
import addProduct from '../components/AddProductComp.vue'
import addUser from '../components/AddUserComp.vue'
import updateProduct from '../components/UpdateProductComp.vue'
export default {
    components: {
        Spinner,
        addProduct,
        addUser,
        updateProduct
    },
    computed: {
        users() {
            return this.$store.state.users
        },
        products() {
            return this.$store.state.products
        },
        product(){
          return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
    },
    methods:{
      deleteProduct(prodID){
        if(confirm('Are you sure you want to delete this product?')){
        this.$store.dispatch("deleteProduct", prodID)
      //   setTimeout(()=>{
      //   console.log("Deleting now...")
      //   location.reload()
      // }, 500)
        }
      }
    }
};
</script>

<style scoped>
.image{
    width: 5rem;
}
.table{
    background-color: #f7f4f1;
}

.btn{
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  box-shadow: 4px 4px black;
}
</style>
