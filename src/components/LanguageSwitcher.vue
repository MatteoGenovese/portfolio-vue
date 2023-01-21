<template>
    <div class="select-language">
        <div class="select-language__button" @click="changhingLanguage=true" v-if="!changhingLanguage">
            <div v-if="$i18n.locale == 'en'">
                <span class="fi fi-gb"></span><span class=" ms-3">EN</span>
            </div>
            <div v-if="$i18n.locale == 'it'">
                <span class="fi fi-it"></span><span class=" ms-3">IT</span>
            </div>
        </div>
        <div class="select-language__display-alternatives" 
            v-else
            @click="changhingLanguage=false">
            <div 
                v-for="language in $i18n.availableLocales" 
                :key="language"
                @click="changeLanguage(language)">
                    <span v-if="language == 'en'"  class="fi fi-gb"></span>
                    <span v-else :class="`fi fi-${language}`"></span>
                    <span class=" ms-3">{{ language.toUpperCase() }}</span>

            </div>
            <!-- <div @click="changeLanguage('it')">

                    <span class="fi fi-it"></span><span class=" ms-3">IT</span>

            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    components: {    },
    methods: {    
        changeLanguage: function (lang) {
            this.$i18n.locale = lang
            if(!this.$router.currentRoute.params == lang)
                this.$router.push({ params: { lang: lang } })
        }
    },
    data: function () {
        return {
            languageSelected: 'en',
            changhingLanguage: false
        }
    },
    props:{
        tag:{
            require:true,
            type:Object
        },
        tagIndex:{
            require:true,
            type:Number
        }
    },
    mounted: function () {
    }
}

</script>

<style lang="scss">
@import '../sass/app.scss';

.select-language{
    z-index: 10;
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 1000;
    background: rgba($color: white, $alpha: .2);
    padding: 1rem 1rem;
    border-radius: 1.5rem;
    width: 8rem;
    
    & *{
        text-align: center ;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    &:hover{
        cursor: pointer;

    }
    .select-language__button{

    }
    &__display-alternatives{
        z-index: 11;
        opacity: 1;
        animation-name: moveDown;
	    animation-duration: 0.5s;
	    animation-timing-function: ease-out;
    }

    @keyframes moveDown{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

}
</style>