<template>
  <header>
    <!-- <div class="logo">
      BOOLFLIX
    </div> -->



    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white" data-bs-theme="dark">
      <div class="container-fluid">
        <div class=" navbar-brand logo">
              BOOLFLIX
        </div>
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item d-flex align-content-center align-items-center">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
            <li class="nav-item d-flex align-content-center align-items-center">
              <a class="nav-link text-white" href="#">Serie TV</a>
            </li>
            <li class="nav-item d-flex align-content-center align-items-center">
              <a class="nav-link text-white" href="#">Film</a>
            </li>
            <li class="nav-item d-flex align-content-center align-items-center">
              <a class="nav-link text-white" href="#">Originali</a>
            </li>
            <li class="nav-item d-flex align-content-center align-items-center">
              <a class="nav-link text-white" href="#">Aggiunti di recente</a>
            </li>
            <li class="nav-item d-flex align-content-center align-items-center">
              <a class="nav-link text-white" href="#">La mia lista</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- <nav>
      <ul>
        <li>Home</li>
        <li>Serie TV</li>
        <li>Film</li>
        <li>Originali</li>
        <li>Aggiunti di recente</li>
        <li>La mia lista</li>
      </ul>
    </nav> -->

    <div class="search-bar bg-dark ">
      <button @click="$emit('search', inputText.trim())">Cerca</button>
      <input type="text" placeholder="  Cerca un film o una serie tv..." v-model="inputText" @keyup.enter="$emit('search', inputText.trim())">
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      inputText: "",
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
@import "../../sass/boolflix/app.scss";

.boolflix{
.logo{
    height: 60px;
    color: #CC2E25;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight:bolder;
    img{
      height: 100%;
      object-fit: contain;
    }
  }

  .navbar-text-color li.nav-item{
    color: white;
  }

  .navbar-toggler-icon{
    color: white !important;
  }

header {
  color: white;
  // height: 4rem;
  // background-color: #000;
  // color: white;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // padding-left: 10px;
  // padding-right: 10px;

  // nav{
  //     height: 100%;
  //     display: flex;
  //     align-items: center;
  //   ul{
  //     height: 100%;
  //     display: block;
  //     align-items: center;
  //     margin-bottom: 0;
  //     li{
  //       height: 100%;
  //       display: block;
  //       align-items: center;
  //       list-style: none;
  //       padding: 10px;
  //     }
  //     }
    
  // }
  .search-bar{
    flex-grow: 1;
    justify-content:start;
    padding-left: 1rem;
    padding-bottom: 1rem;
    display: flex;


    


    input{
      max-width: 25rem;
      margin-left: 10px;
      width: 70%;
      border-radius: 0.5rem;

      }
    button{
      color: black;
      padding: 0.5px 10px;
      border-radius: 6px;
      
    }
  }
}
}
</style>
