<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel2">
              Edit Product
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              :id="product.prodID"
              placeholder="name"
              type="text"
              v-model="product.prodName"
            />
            <input
              placeholder="quantity"
              type="number"
              v-model="product.quantity"
            />
            <input
              placeholder="description"
              type="text"
              v-model="product.prodDesc"
            />
            <input
              placeholder="price"
              type="number"
              v-model="product.price"
            />
            <input
              placeholder="category"
              type="text"
              v-model="product.category"
            />
            <input
              placeholder="image"
              type="text"
              v-model="product.prodUrl"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn" @click="updateProduct">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        product: {
          prodName: "",
          quantity: "",
          price: "",
          category: "",
          prodDesc: "",
          prodUrl: "",
        },
    };
  },
  methods: {
    updateProduct(prodID) {
      this.$store.dispatch("updateProduct", this.product, prodID);
      // setTimeout(() => {
      //   console.log("Updating...");
      //   location.reload();
      // }, 1000);
    },
  },
};
</script>

<style scoped>
.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  color: black;
  box-shadow: 4px 4px black;
}
</style>
