<template>
  <footer>
    <div class="footer-top">
      <div class="container d-flex justify-content-between">
        <div id="footer-left-container" class="d-flex">
          <div class="links">
            <h2>DC Comics</h2>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
            <h2>SHOP</h2>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
          <div class="links">
            <h2>DC</h2>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy policy (New)</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div class="links">
            <h2>SITES</h2>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>

        </div>


        <div id="footer-right-container">
          <img src="../../assets/dccomics/images/dc-logo-bg.png" alt="">
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container d-flex justify-content-between align-items-center">

        <div id="footer-left-container" class="d-flex">
          <a href="#">SIGN-UP NOW!</a>
        </div>

        <div class="footer-right-container">
          <span>FOLLOW US</span>
          <img src="../../assets/dccomics/images/footer-facebook.png" alt="">
          <img src="../../assets/dccomics/images/footer-periscope.png" alt="">
          <img src="../../assets/dccomics/images/footer-pinterest.png" alt="">
          <img src="../../assets/dccomics/images/footer-twitter.png" alt="">
          <img src="../../assets/dccomics/images/footer-youtube.png" alt="">
        </div>
      </div>

    </div>
  </footer>

</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "~bootstrap/scss/bootstrap.scss";
  @import '../../sass/dccomics/app.scss';
  .dccomics{
  .footer-top{
    background-image: url(../../assets/dccomics/images/footer-bg.jpg);
    width: 100%;
    height: 27rem;

    div#footer-right-container{
      height: 27rem;
      overflow: hidden;
      text-align: center;


      img{
        height: 40rem;
        object-fit: cover;
        vertical-align: middle;
        position: relative;
        top:50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

    }

    div#footer-left-container{
      padding: 2rem;
      height: 100%;
      font-size: 1rem;
      color: white;

      h2{
        font-size: 1.3rem;
      }
      .links{
        margin-right: 3rem;
      }
      ul{
        text-decoration: none;
        list-style: none;
        padding-left: 0;
      li{
        color: #88847A;

        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }

        }
      }

    }
        }
    .footer-bottom {
      height: 11rem;
      background-color: #303030;

      .container{
        height: 100%;
      }

      a{
        padding: 1.6rem;
        background-color: #303030;
        border: 0.4rem solid #008DFF;
        color: white;
        text-decoration: none;
      }
      span, img{
        color: #008DFF;
        margin-right: 1.6rem;
      }
      img{
        cursor: pointer;
      }

      .footer-right-container,
      .footer-left-container{
        padding-left: 2rem;
        height: 100%;
        display: flex;
        align-items: center;
        img{
          height: 20%;
        }

      }


    }
  }
</style>
