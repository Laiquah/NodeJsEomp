<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/"
          ><img
            src="https://i.postimg.cc/2y6Cc6N1/Screenshot-2023-08-13-184438-removebg-preview.png"
            alt="logo"
            loading="lazy"
            class="img-fluid"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2">
            <li class="nav-item">
              <router-link to="/">home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">about</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">admin</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 5rem;
}

.navbar {
  padding: 0;
}

.nav-item {
  color: black !important;
}

li {
  margin: 1rem;
}
</style>
