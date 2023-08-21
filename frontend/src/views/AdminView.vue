<template>
  <div>
    <h1>Users</h1>
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
      <tbody v-for="user in users" :key="user">
        <tr v-if="users">
           <td>{{ user.userID }}</td>
           <td>{{ user.firstName }}</td>
           <td>{{ user.lastName }}</td>
           <td>{{ user.userAge }}</td>
           <td>{{ user.gender }}</td>
           <td>{{ user.userRole }}</td>
           <td>{{ user.emailAdd }}</td>
           <td><img :src="user.userProfile" :alt="user.firstName" loading="lazy" class="img-fluid image"></td>
           <td><button>edit</button><button>delete</button></td> 
        </tr>
        <tr v-else>
            <Spinner/>
        </tr>
      </tbody>
    </table>
    <div>
        <h1>products</h1>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>category</th>
            <th>product image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product">
          <tr v-if="products">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>R{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td><img :src="product.prodUrl" :alt="product.prodName" class="img-fluid image" loading="lazy"></td>
            <td><button>edit</button><button>delete</button></td>
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
export default {
    components: {
        Spinner
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
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
</style>
