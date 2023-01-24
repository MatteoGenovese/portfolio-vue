<template>
    <section id="jumbotron" class="box">
        <div class="h-100 d-flex justify-content-center align-items-center align-content-center position-relative">
            <div class="align-items-center">
                <p>
                    {{ $t('home-jumbotron.title') }}

                </p>
                <h2 v-html="$t('home-jumbotron.description')" class="presentation">
                </h2>
            </div>
            <ScrollAnimation />
        </div>


    </section>
</template>


<script>
import ScrollAnimation from '@/components/portfolio/ScrollAnimation.vue'

export default {
  name: 'HomePortfolio',
  components: {
    ScrollAnimation,
  }
}

</script>

<style lang="scss">
@import '../../sass/portfolio/app.scss';

#jumbotron {
    background-size: cover;
    background-position: center;
    background-image:linear-gradient(
                        to right bottom,
                        rgba(#0F2027, 0.9),
                        rgba(#1CB5E0, 0.9)),
                        url(../../assets/portfolio/jumbotron.jpg);
    width: 100%;
    object-fit: cover;
    height: calc(100vh);
    p, h1, h2{
        font-size: 3rem;
        color: #eeeeee;
    }

    .presentation{
        text-align: start;
    }
}


</style>>
