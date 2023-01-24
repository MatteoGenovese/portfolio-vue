<template>
    <section id="AboutMe" class="box">



<div class="heading d-flex justify-content-center">
    <h1> {{ $t('about-me.i-am') }} <span class="fw-bold text-marked"> Matteo Genovese</span>! </h1>
</div>

<div class="container">

    <div data-aos="fade-in" class="row align-content-lg-center align-self-lg-center flex-column-reverse flex-lg-row">

        <div class="col-lg-8 col-12 d-flex align-content-center align-items-center">
            <div data-aos="fade-left" class="about-me  d-flex flex-column w-100 justify-content-center">
                <div class="about-me__description d-flex flex-column flex-md-row align-items-center ">
                    <div class="icon">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <p v-html="$t('about-me.first-paragraph')">
                        
                    </p>
                </div>
                <div class="about-me__description d-flex flex-column flex-md-row align-items-center">
                    <div class="icon">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <p v-html="$t('about-me.second-paragraph')">
                    </p>
                </div>
                <div class="about-me__description d-flex flex-column flex-md-row align-items-center">
                    <div class="icon">
                        <i class="fa-solid fa-people-group"></i>
                    </div>
                    <p v-html="$t('about-me.third-paragraph')">


                    </p>
                </div>
            </div>
        </div>


        <div class="col-lg-4 col-12 profile-photo mb-lg-0 mb-5" data-aos="fade-right">
            <div class="d-flex justify-content-center  profile-photo__clip mb-4 m-lg-3">
                <!-- <img :src="require(`../assets/FotoLinkedin.jpeg`)" alt="" class="profile-photo-clip"> -->
                <img src="../../assets/portfolio/FotoLinkedin.png" alt="" class="w-100">

            </div>
            <ContactMe />
            <GitHubProfile />
            
        </div>


    </div>
</div>


</section>
</template>

<script>

import ContactMe from './ContactMe.vue';
import GitHubProfile from './GitHubProfile.vue';

export default {

    components: {
        ContactMe,
        GitHubProfile
    }

}
</script>

<style lang="scss">
#AboutMe {

    min-height: 30rem;

    .about-me {
        &__description:not(:last-child) {
            margin-bottom: 2rem;
        }

        .icon {
            font-size: 4rem;
            margin-right: 3rem;
            &>* {
                background-image: linear-gradient(to right bottom,
                        rgba(#0F2027, 0.9),
                        rgba(#1CB5E0, 0.9));
                -webkit-background-clip: text;
                color: transparent;
                // 2b839c
            }
        }
    }

    .heading {
        margin-bottom: 3rem;
    }

    .profile-photo{
        &__clip{
            width: 100%;
            img{
                max-width: 30rem;
                border-radius: 50%;
            }
        }
    }


}
</style>