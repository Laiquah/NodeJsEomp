<template>
  <div>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span
                    >Unit 1 - 3 Toledo Close, Capricorn Drive , Capricorn Park
                    Muizenburg</span
                  >
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span><a href="tel:0658190250">065 819 0250</a></span>
                  <br />
                  <span><a href="tel:0679906093">067 990 6093</a></span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span
                    ><a href="mailto:cotielaiquah@gmail.com" target="_blank"
                      >cotielaiquah@gmail.com</a
                    ></span
                  >
                  <br />
                  <span
                    ><a href="mailto:eightonleepaulse@gmail.com" target="_blank"
                      >eightonleepaulse@gmail.com</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <router-link to="/"
                    ><img
                      src="https://i.postimg.cc/2y6Cc6N1/Screenshot-2023-08-13-184438-removebg-preview.png"
                      class="img-fluid"
                      loading="lazy"
                      alt="logo"
                  /></router-link>
                </div>
                <div class="footer-text">
                  <p>"Shaping Dreams, Crafting Memories: ClayExpressions"</p>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">about</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#services">services</a></li>
                  <li><a href="#partnerships">partnerships</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-social-icon">
                <span>Follow us</span>
                <a
                  href="https://www.facebook.com/pottersworkCT/"
                  target="_blank"
                  ><img
                    src="https://i.postimg.cc/QMwWNNN2/icons8-facebook-150.png"
                    loading="lazy"
                    alt="facebook"
                /></a>
                <a href="https://www.instagram.com/potterswork/" target="_blank"
                  ><img
                    src="https://i.postimg.cc/gcRBWnkP/icons8-instagram-150.png"
                    loading="lazy"
                    alt="instagram"
                /></a>
                <a href="https://twitter.com/LaiquahC" target="_blank"
                  ><img
                    src="https://i.postimg.cc/63bF9JwS/icons8-twitter-150.png"
                    loading="lazy"
                    alt="twitter"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="text-center">
              <div class="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.single-cta i {
  color: black;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: black;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: black;
  line-height: 28px;
}
.footer-social-icon span {
  color: black;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon img {
  width: 2rem;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: #3b5998;
}
.twitter-bg {
  background: #55acee;
}
.google-bg {
  background: #dd4b39;
}
.footer-widget-heading h3 {
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: #ff5e14;
}
.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
  color: #fff;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: #ff5e14;
  padding: 13px 20px;
  border: 1px solid #ff5e14;
  top: 0;
}
.copyright-area {
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: black;
}
.copyright-text p a {
  color: #ff5e14;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: #ff5e14;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style>
