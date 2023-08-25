<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      @click="openEditModal(user.userID)"
      data-bs-toggle="modal"
      :data-bs-target="'#texampleModal' + user.userID"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'texampleModal' + user.userID"
      tabindex="-1"
      :aria-labelledby="'texampleModalLabel' + user.userID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="texampleModalLabel3">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input type="text" placeholder="ID" v-model="editingUser.userID" />
            <input
              type="text"
              placeholder="first name"
              v-model="editingUser.firstName"
            />
            <input
              type="text"
              placeholder="last name"
              v-model="editingUser.lastName"
            />
            <input
              type="number"
              placeholder="age"
              v-model="editingUser.userAge"
            />
            <input
              type="text"
              placeholder="gender"
              v-model="editingUser.gender"
            />
            <input
              type="text"
              placeholder="role"
              v-model="editingUser.userRole"
            />
            <input
              type="text"
              placeholder="email address"
              v-model="editingUser.emailAdd"
            />
            <input
              type="text"
              placeholder="profile image"
              v-model="editingUser.userProfile"
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn"
              @click="updateProduct(user.userID)"
            >
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
  props: ["user"],
  data() {
    return {
      editingUser: {
        ...this.user,
      },
      editingUserID: null,
      model: {
        user: {
          firstName: "",
          lastName: "",
          userAge: "",
          gender: "",
          userRole: "",
          emailAdd: "",
          userProfile: "",
        },
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(id) {
      console.log("reached");
      this.editingUserID = id;
      this.editingUser = {
        ...this.$store.state.users.find((user) => user.userID === id),
      };
    },
    updateProduct(id) {
      this.$store
        .dispatch("updateUser", {
          userID: id,
          data: { ...this.editingUser },
        })
        .then(() => {
          console.log("User updated!");
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });
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
