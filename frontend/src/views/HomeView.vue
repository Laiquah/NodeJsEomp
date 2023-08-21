<template>
  <div>
    <div class="home">
      <div class="text">
        <h1>Welcome to ClayExpressions</h1>
      </div>
      <div class="text">
        <h3> Where We Shape Dreams, Craft Memories</h3>
      </div>
      <div class="text">
        <button><router-link to="/about">more about us</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.home{
  background-image: url("https://i.postimg.cc/yxfkm5Vx/Potterswork-stock-2.jpg");
  background-attachment: fixed;
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
}

button{
  background-color: white;
  color: black;
  width: 15rem;
  height: 3rem;
  border-radius: 2rem;
}

.text{
  position: relative;
  top: 30%;
  color: black;
}
</style>