<template>
  <header class="d-flex justify-content-between ">

    <nav class="navbar navbar-expand-md navbar-light bg-light w-100" style="background-color: white;">
      <div class="container">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <div class="img-container">
            <img src="../../assets/dccomics/images/dc-logo.png" alt="">
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            
            <ul class="d-flex align-items-center navbar-nav">
              
              
              <li class="nav-link" v-for="(page, index) in menuPages" :key="index"
              :class="{ active: page.isActive == true }" href="#"> {{ page.title }}</li>
            </ul>
            
            
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- <div>
        <ul class="d-flex align-items-center">
          <li v-for="(page, index) in menuPages" :key="index" :class="{ active: page.isActive == true }">
            {{ page.title }}
          </li>
        </ul>
      </div> -->




  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      menuPages: [
        {
          title: "Characters",
          isActive: false
        },
        {
          title: "COMICS",
          isActive: true
        },
        {
          title: "MOVIES",
          isActive: false
        },
        {
          title: "TV",
          isActive: false
        },
        {
          title: "GAMES",
          isActive: false
        },
        {
          title: "COLLECTIBLES",
          isActive: false
        },
        {
          title: "VIDEOS",
          isActive: false
        },
        {
          title: "FANS",
          isActive: false
        },
        {
          title: "NEWS",
          isActive: false
        },
        {
          title: "SHOP",
          isActive: false
        },]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../sass/dccomics/app.scss';
.dccomics {
  header {
    .navbar-toggler{
      height: 4rem;
    }
    .img-container {
      padding: 0.9rem 0;
      height: 10rem;

      img {
        height: 100%;
      }
    }

    ul {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        display: flex;
        align-items: center;
        text-decoration: none;
        list-style: none;
        text-transform: uppercase;

        font-size: 1.3rem;
        padding: 0.9rem;
        height: 100%;

        &:hover {
          cursor: pointer;
          background-color: #3880F1;
          color: white;
        }

        &.active {
          color: #3880F1;
          border-bottom: .3rem solid #3880F1;
        }
      }
    }
  }
}
</style>
