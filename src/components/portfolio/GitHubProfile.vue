<template>
    <div class="d-flex align-content-center align-items-center justify-content-center github-profile position-relative">
        <div class=" justify-content-center align-content-center align-self-center github-profile__text">GitHub:</div>
        <a href="https://github.com/MatteoGenovese" class="icon"><i class="fa-brands fa-github"></i></a>
    </div>
</template>

<script>


export default {

    components: {

    }
}

</script>

<style lang="scss" >
@import '../../sass/portfolio/app.scss';

.portfolio{
    .github-profile {
        font-weight: bold;
        font-size: $default-font-size;

        .icon {
            font-size: 1.5rem;
            margin-right: 1rem;

            &>* {
                @include respond(phone) { 
                    font-size: 300%; 
                }
                background-image: $primary_gradient;
                -webkit-background-clip: text;
                color: transparent;
                // 2b839c
            }
        }

        &__text {
            font-weight: bolder;
            margin-right: 1rem;
        }
    }
    .fa-github {
        font-size: 4rem;
    }
}
</style>