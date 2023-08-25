<template>
  <div>
    <h1 class="h1">keep in touch with us</h1>
    <div class="login-card" id="contact">
      <div class="card-header">
        <div class="log">Contact</div>
      </div>
      <form action="https://formspree.io/f/xqkvqbbe" method="POST" class="form">
        <div class="form-group">
          <input
            required
            name="name"
            oninvalid="this.setCustomValidity('provide your name')"
            oninput="this.setCustomValidity('')"
            id="username"
            type="text"
            placeholder="first name"
          />
          <input
            required
            name="name"
            oninvalid="this.setCustomValidity('provide your surname')"
            oninput="this.setCustomValidity('')"
            id="username"
            type="text"
            placeholder="last name"
          />
          <input
            required
            name="email"
            oninvalid="this.setCustomValidity('provide your email')"
            oninput="this.setCustomValidity('')"
            id="username"
            type="text"
            placeholder="email address"
          />
          <input
            required
            name="number"
            oninvalid="this.setCustomValidity('provide your number')"
            oninput="this.setCustomValidity('')"
            id="username"
            type="text"
            placeholder="contact number"
          />
        </div>
        <div id="form">
          <button value="submit" type="submit" class="btn">submit</button>
          <button type="reset" value="clear" class="btn">clear</button>
        </div>
      </form>
    </div>
    <div class="fun">
      <h4 class="h4">
        Thank you for stopping by ClayExpressions, hope you enjoyed your stay.
        See you next time!
      </h4>
      <button class="btn2 btn">
        <router-link to="/">back to the home page</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#card {
  margin-top: 2rem;
}

router-link:hover{
  color: white !important;
}

.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  box-shadow: 4px 4px black;
}
.btn2 {
  border: 2px solid #f7f4f1;
  border-radius: 1rem;
  background-color: #f7f4f1;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 4px 4px black;
}
.login-card {
  width: 50rem;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-image: url("https://i.postimg.cc/zfhGcvkn/chloe-bolton-R0qth-Xq3jec-unsplash.jpg");
  box-shadow: 2px 2px 10px black;
}

#form {
  display: flex;
  justify-content: space-between;
}

#username {
  margin-bottom: 2rem;
}

.card-header {
  text-align: center;
  margin-bottom: 20px;
}

.card-header .log {
  margin: 0;
  font-size: 24px;
  color: black;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 18px;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.5s;
}

input[type="submit"] {
  width: 25%;
  background-color: black;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: white;
  color: black;
}

#clear:hover {
  background-color: white;
  color: black;
}

.h4 {
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-weight: bold;
}

.h1{
  margin-top: 3rem;
  text-decoration: underline;
  margin-bottom: 2rem;
}

#contact{
  margin-bottom: 3rem;
}

.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  box-shadow: 4px 4px black;
}

.btn:hover{
  background-color: black;
  box-shadow: 4px 4px white;
  color: white;
}

@media screen and (max-width:300px){
  #contact{
    width: 280px;
  }

  .btn{
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }

  .h4{
    margin-bottom: 2rem;
  }
}

@media screen and (max-width:700px) {
  #card{
    width: 680px;
  }
}
</style>
