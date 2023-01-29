<template>

  <div class="pz_card">
    <div class="img-container">
      <img :src="thumbPassed" alt="Default" class="w-100">
    </div>
    <!-- <div>{{ pricePassed }}</div> -->
    <div>{{ seriesPassed }}</div>
    <!-- <div>{{ typePassed }}</div> -->
  </div>

</template>

<script>

export default {
  name: 'Cards',
  props: {
    thumbPassed: String,
    pricePassed : String,
    seriesPassed : String,
    typePassed : String,
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import '../../sass/dccomics/app.scss';

.dccomics{

    div.pz_card {
      width: calc( 100% / 6 );
      @include respond(tab-port) { 
        width: calc( 100% / 3 );
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      object-fit: cover;

      div{
        margin-top: 1.5rem;
        text-transform: uppercase;
        text-align: center;
      }
      .img-container {
        width: 100%;
        height: 16rem;
        overflow: hidden;
        cursor: pointer;
        object-position: center;
        img{
          object-position: center;
        }
      }
    }
  }
</style>
