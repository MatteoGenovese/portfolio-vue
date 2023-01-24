<template>
    <div class="d-flex align-content-center align-items-center justify-content-center contact-me position-relative">
        <div class=" justify-content-center align-content-center align-self-center contact-me__text"> {{ $t('contact-me') }} :</div>
        <a href="https://www.linkedin.com/in/matteogenovese/" class=""><i class="fa-brands fa-linkedin mx-4"></i></a>
        <a href="mailto:matteo.genovese@icloud.com"><i class="fa-solid fa-square-envelope"></i></a>
    </div>
</template>

<script>


export default {

    components: {

    }
}

</script>

<style lang="scss">
@import '../../sass/portfolio/app.scss';

.contact-me{

font-size: large;
font-weight: bolder;

&__text{
    font-size: 2rem;
    font-weight: bolder;
}

}

.fa-linkedin{
font-size: 4rem;


}
.fa-square-envelope{
font-size: 4rem;


}
</style>