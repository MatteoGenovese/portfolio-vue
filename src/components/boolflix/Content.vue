<template>
    <div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <!-- case: FILM -->
                    <div v-if="isMovie" class=" w-100">
                        <!-- case: path is null -->
                        <img v-if="content.poster_path != null" class="w-100"
                            :src="basicImageUrl + poster_sizes[3] + content.poster_path" :alt="content.poster_path">
                        <!-- case: path is not null and the poster is visible-->
                        <img v-else :src="basicImageUrl + poster_sizes[3] + content.poster_path"
                            class="d-flex justify-content-center w-100 " :alt="content.title">
                    </div>
                    <!-- case: TV SERIE -->
                    <div v-else class=" w-100">
                        <!-- case: path is null -->
                        <img v-if="content.poster_path != null" class=""
                            :src="basicImageUrl + poster_sizes[3] + content.poster_path" :alt="content.poster_path">
                        <!-- case: path is not null and the poster is visible-->
                        <img v-else :src="basicImageUrl + poster_sizes[3] + content.poster_path"
                            class="d-flex justify-content-center" :alt="content.name">
                    </div>
                </div>
                <div class="flip-card-back">
                    <ul>
                        <!-- case: FILM -->
                        <li v-if="isMovie">
                            <span class="flip-card-back__title">
                                Titolo: {{ content.title }}
                            </span>
                        </li>
                        <li v-if="isMovie && content.original_title != content.title">
                            Titolo Originale: {{ content.original_title }}
                        </li>
                        <!-- case: TV SERIE -->
                        <li v-if="!isMovie">
                            Titolo: {{ content.name }}
                        </li>
                        <li v-if="!isMovie && content.original_name != content.name">
                            Titolo Originale: {{ content.original_name }}
                        </li>
                        <!-- case: information in common -->
                        <li>Lingua: 

                                <country-flag  v-if="content.original_language === 'en'" :country='"gb"' size='small' />


                                <country-flag v-if="content.original_language === 'ja'" :country='"jp"' size='small' />

                                <country-flag  v-if="content.original_language != 'en' && content.original_language != 'ja'" :country='content.original_language' size='small' />
                            <span>{{ content.original_language.toUpperCase() }}</span>
                        </li>
                        <li>
                            <star-rating :increment="1" :max-rating="5" inactive-color="#999999" active-color="#F8D36B"
                                :star-size="20" :read-only="true" :rating="content.vote_average / 2">
                            </star-rating>
                        </li>
                        <li v-if="content.overview != ''">Descrizione: {{ content.overview }}</li>
                    </ul>
                </div>
            </div>
        </div>





    </div>
</template>

<script>
// https://www.npmjs.com/package/vue-country-flag country flag documentation
import CountryFlag from 'vue-country-flag';
// https://www.npmjs.com/package/vue-star-rating star rating documentation
import StarRating from 'vue-star-rating'
export default {
    name: 'Content',
    props: {
        content: {
            type: Object,
            required: true,
        },
        isMovie: {
            type: Boolean,
            required: true,
        },
        isEmpty: {
            type: Boolean,
            required: true,
        }
    },
    components: {
        CountryFlag,
        StarRating
    },
    data: function () {
        return {
            basicImageUrl: 'https://image.tmdb.org/t/p/',
            // https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400 available sizes of images
            poster_sizes: [
                "w92",
                "w154",
                "w185",
                "w342",
                "w500",
                "w780",
                "original"
            ],
            showFront: true,
        }
    },
    methods: {
        whereIAm() {
            console.log(this.isMovie);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/boolflix/app.scss";


$card_width: 230px;
$card_height: calc($card_width * 1.5);

// https://www.w3schools.com/howto/howto_css_flip_card.asp card flip documentation

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    min-width: $card_width;
    height: $card_height;
    perspective: 1000px;
    flex-grow: 1;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    min-width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    top: 0;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
    font-size: 1rem;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
    
    img{
        width: 100%;
        object-fit: cover;
        object-position: bottom;
        position: absolute;
        bottom: 0;


        
    }
    &::-webkit-scrollbar {
        display: none;
    }
    &__title{
        font-size: 1rem;
        font-weight: bold;
    }
}

.flip-card-front{
    color: #CC2E25;
    background: #000;
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
}

/* Style the back side */

.flip-card-back {
    background-color: #000;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: flex-start;
    overflow: auto;
    font-size: 0.7rem;
    text-align: left;
    text-justify: inter-word;
    padding: 1rem;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;

        li {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            padding-top: 10px;
        }
    }
}
</style>