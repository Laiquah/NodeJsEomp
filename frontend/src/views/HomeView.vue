<template>
  <div>
    <div class="home">
      <div class="text">
        <h1>Welcome to ClayExpressions</h1>
      </div>
      <div class="text">
        <h3>Where We Shape Dreams, Craft Memories</h3>
      </div>
      <div class="text">
        <button class="btn"><router-link to="/about">more about us</router-link></button>
      </div>
    </div>
    <div class="pro">
      <h2 class="feature">Featured Products:</h2>
      <div class="container">
        <div class="row flex">
          <div class="col-3 flex">
            <center>
              <div class="card card-grid1 flex">
                <a href="/products" class="card1 flex">
                  <div
                    class="card__bg1 flex"
                    style="
                      background-image: url(https://i.postimg.cc/J0XtrmbH/BOWL-Bleeksysie-4.jpg);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
                <a href="/products" class="card1 flex">
                  <div
                    class="card__bg1 flex"
                    style="
                      background-image: url(https://i.postimg.cc/6q5dj8RL/IMG-577940-mm1-20-sec-at-f-56-ISO-200.jpg);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
                <a href="/products" class="card1 flex">
                  <div
                    class="card__bg1 flex"
                    style="
                      background-image: url(https://i.postimg.cc/JndQBF1m/SPOON-Salt-1.jpg);
                    "
                  ></div>
                  <div class="card__content1">
                    <h3 class="card__heading1 text-white"></h3>
                  </div>
                </a>
              </div>
              <br />
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  background-image: url("https://i.postimg.cc/yxfkm5Vx/Potterswork-stock-2.jpg");
  background-attachment: fixed;
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
}

button {
  background-color: white;
  color: black;
  width: 15rem;
  height: 3rem;
  border-radius: 2rem;
}

.text {
  position: relative;
  top: 30%;
  color: white;
  font-weight: 50rem;
  text-shadow: 2px 2px black;
}

.card1 {
  list-style: none;
  position: relative;
  transition: all 0.5s ease-out;
}

.pro {
  background-color: #f7f4f1;
}

.card-grid1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 100%;
}

.btn {
  border: 2px solid #f7f4f1;
  background-color: #f7f4f1;
  box-shadow: 4px 4px black;
}
.card__bg1 {
  position: relative;
  height: 50vh;
  min-width: 250px;
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 1/1;
  transform: scale(1);
  transition: all 0.5s ease-out;
}

.card__content1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.card__category1 {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #acacac;
}
.card1:hover {
  transform: scale(1.02);
  filter: drop-shadow(0px 0px 100px #acacac);
}
.card-grid1:hover > .card1:not(:hover).card1 {
  filter: brightness(0.8) grayscale(0.6) contrast(1.2) blur(10px);
}

.card {
  width: 100%;
  border: none;
}

.card {
  background-color: transparent;
}
.img {
  border-radius: 10px;
  width: 50%;
}

h2 {
  color: black;
  padding: 1rem;
}

@media screen and (max-width:300px) {
  .card{
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  .card__bg1{
    width: 280px;
    margin: 0;
  }

  .btn{
    width: 280px;
  }
}

@media screen and (max-width:700px) {
  .card{
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
