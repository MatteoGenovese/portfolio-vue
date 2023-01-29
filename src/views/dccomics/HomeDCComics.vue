<template>
  <section class="dccomics">
    <Header />
    <Main />
    <Products />
    <Footer />
  </section>
</template>

<script>

import Header from '../../components/dccomics/Header.vue';
import Main from '../../components/dccomics/Main.vue';
import Footer from '../../components/dccomics/Footer.vue';
import Products from '../../components/dccomics/Products.vue';



export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    Products,
}
}
</script>

<style lang="scss">

  @import "~bootstrap/scss/bootstrap.scss";

</style>
