<template>
  <div class="product-container">
    <div class="wrapper container" >
      <div class="product" v-for="(product,index) in products" :key="index">
        <div class="image-container">
          <img :src="require(`../../assets/dccomics/images/${product.url}`)" :alt="product.title">
        </div>
        <h4>{{ product.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data: function() {
    return {
      products: [
        {
          title: "DIGITAL COMICS",
          url: "buy-comics-digital-comics.png"
        }, 
        {
          title: "DC MERCHANDISE",
          url: "buy-comics-merchandise.png",
        }, 
        {
          title: "SUBSCRIPTION",
          url: "buy-comics-subscriptions.png",
        }, 
        {
          title: "COMIC SHOP LOCATOR",
          url: "buy-comics-shop-locator.png",
        }, 
        {
          title: "DC POWER VISA",
          url: "buy-dc-power-visa.svg",
        }
        ]
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../sass/dccomics/app.scss';
.dccomics{
.product-container {
  @include respond(phone) {
    padding: 1rem 0;
    height: 18rem;
  }
  height: 15rem;
  background-color: #3880F1;
  color: #fff;

  .container{
    display: flex;

  }
  .wrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    div.product{
      margin: 0 1rem;
      min-width: 10rem;

    }
    div.product{
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    h4{
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }
  img {
    height: 5rem;
    padding: .5rem;
  }

}
}
</style>
