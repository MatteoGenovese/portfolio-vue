<template>
    <div>
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

import HeaderComponent from '@/components/HeaderComponent.vue'
import HomeJumbotron from '@/components/HomeJumbotron.vue'
import CoreTechnologies from '@/components/CoreTechnologies.vue'
import AboutMe from '@/components/AboutMe.vue'
import MyProjects from '@/components/MyProjects.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

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

<style lang="scss">

@import '../sass/app.scss';

p,
div,
button{
    font-size: $default-font-size;
}

.text-marked {
    background-image: linear-gradient(
                to right bottom,
                rgba($secondary_color_dark, 0.9),
                rgba($secondary_color_light, 0.9));
    -webkit-background-clip: text;
    color: transparent;
}

.box {
    min-height: 40rem;
}

section{
    &:not(:last-child) {
        background-color: $section-color;
        padding: 5rem 2rem;
    }
    &:last-child {
        background-color: $section-color;
        padding-top: 0rem;
    }
}


section:nth-child(even) {
    background-color: white;
}



#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: justify;
    color: #2c3e50;

    h1 {
        text-align: center;
    }
}

nav {
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

</style>