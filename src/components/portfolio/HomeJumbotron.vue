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

<style lang="scss" >
@import '../../sass/portfolio/app.scss';

.portfolio{
#jumbotron {
    background-size: cover;
    background-position: center;
    background-image:$primary_gradient,
                        url(../../assets/portfolio/jumbotron.jpg);
    width: 100%;
    object-fit: cover;
    height: calc(100vh);
    
    p{
        font-size: $default-font-size;
        // @include respond(phone) { 
        //     font-size: 90%;        
        // }
    }
    h2{
        // @include respond(phone) { 
        //     font-size: 100%;        
        // }
    }
    p, h1, h2{
        color: #eeeeee;
        @include respond(phone) { 
            padding: 1rem 2rem;
        }
    }

    .presentation{
        text-align: start;
    }
}
}

</style>>
