<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal3"
    >
      add user
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal3"
      tabindex="-1"
      aria-labelledby="exampleModal3Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel1">New User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              placeholder="first name"
              v-model="model.user.firstName"
            />
            <input
              type="text"
              placeholder="last name"
              v-model="model.user.lastName"
            />
            <input
              type="number"
              placeholder="age"
              v-model="model.user.userAge"
            />
            <input
              type="text"
              placeholder="gender"
              v-model="model.user.gender"
            />
            <input
              type="text"
              placeholder="role"
              v-model="model.user.userRole"
            />
            <input
              type="text"
              placeholder="email address"
              v-model="model.user.emailAdd"
            />
            <input
              type="text"
              placeholder="password"
              v-model="model.user.userPass"
            />
            <input
              type="text"
              placeholder="profile image"
              v-model="model.user.userProfile"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn" @click="createUser">
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
      addingUserID: null,
      model: {
        user: {
          firstName: "",
          lastName: "",
          userAge: "",
          gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "",
        },
      },
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("register", this.model.user);
      console.log(this.model.user);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
};
</script>

<style scoped>
.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  box-shadow: 4px 4px black;
}

input {
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
}
</style>
