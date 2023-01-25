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

<style lang="scss" scoped>
@import '../../sass/portfolio/app.scss';

.github-profile {
    font-weight: bold;
    .icon {
        font-size: 1rem;
        margin-right: 1rem;

        &>* {
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
</style>