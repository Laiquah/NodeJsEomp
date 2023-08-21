<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    update user
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <input type="text" placeholder="ID">
            <input type="text" placeholder="first name">
            <input type="text" placeholder="last name">
            <input type="number" placeholder="age">
            <input type="text" placeholder="gender">
            <input type="text" placeholder="role">
            <input type="text" placeholder="email address">
            <input type="text" placeholder="password">
            <input type="text" placeholder="profile image">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>