<template>
    <div v-if="work.visible" class="cs-wrapper " @click="cardToggle()" :class="isFrontActive ? ' active' : ' back'">
        <div class="cs-card">

            <div class="cs-card__front">
                <img :src="require(`../../assets/portfolio/works/${work.imageName}`)" :alt="work.imageName" class="">
            </div>

            <div class="cs-card__back d-flex flex-column justify-content-between">
                <div class="content">
                    <h2 class="cs-card__title">{{ work.title }}</h2>
                    <p v-html="work.description" class="cs-card__description"></p>
                </div>

                <div class="link">
                    <a v-if="work.webSiteLink" :href="work.webSiteLink" class="btn btn-info">
                        View more
                    </a>
                    <a v-else class="d-none">
                        View more
                    </a>

                    <a :href="work.gitHubLink" class="btn btn-primary ms-2">
                        GitHub link
                    </a>
                    <div class="cs-card__tags">
                        <span v-for="(tag, index) in work.tags" :key="index">
                            -{{ tag }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>


export default {

    props: {
        work: {
            //   type: Object,
            //   required: true
        }
    },
    methods: {
        cardToggle: function () {
            this.isFrontActive = !this.isFrontActive;
            console.log(this.isFrontActive)
        }
    },
    data: function () {
        return {
            isFrontActive: true,
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../sass/portfolio/app.scss';


img{
    object-fit: cover;
    width: 100%;
}

.cs-wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 4rem rgba($secondary_color_dark, .4);
        -moz-box-shadow: 0 1.5rem 4rem rgba($secondary_color_dark, .4);
        -webkit-box-shadow: 0 1.5rem 4rem rgba($secondary_color_dark, .4);
        -o-box-shadow: 0 1.5rem 4rem rgba($secondary_color_dark, .4);

    .cs-card {
        height: 100%;
        width: 100%;
        text-align: center;




        &__tags {
            margin-top: 1.5rem;
            text-align: center;
            @include respond(phone) { 
                font-size: 60%; 
            }
        }

        &__title {
            background-image: $primary_gradient;
            border-radius: 1rem;
            padding: 1rem 0;
            vertical-align: middle;
            margin-bottom: 3rem;
            color: $primary_color_light;
        }

        &__description {
            text-align: justify;
        }

        &__front {
            height: 100%;
            width: 100%;
            position: absolute;
            transform: translateX(0%);
        }

        &__back {
            height: 100%;
            width: 100%;
            position: absolute;
            overflow: scroll;
            transform: translateX(100%);
            padding: 3rem 3rem;
            background-color: $primary_color_light;
        }
    }
}
@media (hover: hover) {
    .cs-wrapper {
        height: 35rem;
        &:hover {
            transition: all .8s ease;
        }

        &:hover .cs-card__front {
            opacity: 0;
            transform: translateX(-100%);
        }

        &:hover .cs-card__back {
            opacity: 1;
            transform: translateX(0%);
        }
        .cs-card {
            &__back {
                padding: 2rem 2rem;
            }
        }
    }
}

@media (hover: none) {
    .cs-wrapper {
        height: 30rem;
        &.back .cs-card__front {
            opacity: 0;
            transform: translateX(-100%);
        }

        &.back .cs-card__back {
            opacity: 1;
            transform: translateX(0%);
        }
        .cs-card {
            &__back {
                padding: 1rem 1rem;
            }
        }
    }

}



.link {
    .tags {
        margin-top: 0.5rem;
    }
}

a.btn {
    transition: all 0.2s ease-out;
    font-size: $default-font-size;

    &:hover {
        scale: 1.1;
        transform: translateY(-0.3rem);
    }
}
</style>