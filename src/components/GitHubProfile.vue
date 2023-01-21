<template>
    <div class="d-flex align-content-center align-items-center justify-content-center github-profile position-relative">
        <div class=" justify-content-center align-content-center align-self-center github-profile__text">GitHub:</div>
        <a href="https://github.com/MatteoGenovese" class=""><i class="fa-brands fa-github"></i></a>
    </div>
</template>

<script>


export default {

    components: {

    }
}

</script>

<style lang="scss">
@import '../sass/app.scss';

.github-profile{

font-size: large;
font-weight: bolder;

&__text{
    font-size: 2rem;
    font-weight: bolder;
    margin-right: 1rem;
}

}

.fa-github{
font-size: 4rem;
}
</style>