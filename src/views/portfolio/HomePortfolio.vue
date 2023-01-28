<template>
    <div class="portfolio">
        <!-- <HeaderComponent /> -->

        <LanguageSwitcher />

        <HomeJumbotron />

        <AboutMe />

        <CoreTechnologies />

        <MyProjects />

        <FooterComponent />

    </div>
</template>

<script>

import HeaderComponent from '@/components/portfolio/HeaderComponent.vue'
import HomeJumbotron from '@/components/portfolio/HomeJumbotron.vue'
import CoreTechnologies from '@/components/portfolio/CoreTechnologies.vue'
import AboutMe from '@/components/portfolio/AboutMe.vue'
import MyProjects from '@/components/portfolio/MyProjects.vue'
import FooterComponent from '@/components/portfolio/FooterComponent.vue'
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher.vue'

export default {
  name: 'HomePortfolio',
  components: {
    HeaderComponent,
    HomeJumbotron,
    CoreTechnologies,
    AboutMe,
    MyProjects,
    FooterComponent,
    LanguageSwitcher
  },
  data: function () {
        return {
            
        }
    }

}
</script>

<style lang="scss" >
@import "../../sass/portfolio/app.scss";


</style>