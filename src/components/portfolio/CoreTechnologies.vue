<template>
    <section id="CoreTechnologies">

<div class="heading d-flex justify-content-center">
        <h1>{{ $t('core-technologies.title-composition.first-word') }} 
            <span class="fw-bold text-marked"> {{ $t('core-technologies.title-composition.second-word') }}  </span> 
            {{ $t('core-technologies.title-composition.third-word') }} </h1>
</div>


<div class="container">
    <div class="row">

        <div class="col-md-6 col-12 g-5">
            <div data-aos="fade-right" class="technology-card">
                <div class="technology-card__image w-100 justify-content-center align-content-center d-flex align-self-center ">
                    <img src="../../assets/portfolio/frameworks.png" class="w-75 align-items-center">
                </div>
                <div class="technology-card__description">
                    <p class="text-justify" v-html="$t('core-technologies.first-paragraph')">
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-12 g-5">
            <div data-aos="fade-right" class="technology-card">
                <div class="technology-card__image w-100 justify-content-center align-content-center d-flex align-self-center ">
                    <img src="../../assets/portfolio/languages.png" class="w-75 align-items-center">
                </div>
                <div class="technology-card__description">
                    <p class="text-justify" v-html="$t('core-technologies.second-paragraph')">
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-12 g-5">
            <div data-aos="fade-right" class="technology-card">
                <div class="technology-card__image w-100 justify-content-center align-content-center d-flex align-self-center ">
                    <img src="../../assets/portfolio/markupAndStyle.png" class="w-75 align-items-center">
                </div>
                <div class="technology-card__description">
                    <p class="text-justify" v-html="$t('core-technologies.third-paragraph')">
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-12 g-5">
            <div data-aos="fade-right" class="technology-card">
                <div class="technology-card__image w-100 justify-content-center align-content-center d-flex align-self-center ">
                    <img src="../../assets/portfolio/db.png" class="w-75 align-items-center">
                </div>
                <div class="technology-card__description">
                    <p class="text-justify" v-html="$t('core-technologies.fourth-paragraph')">
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>

</section>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>

@import '../../sass/portfolio/app.scss';

#CoreTechnologies{
    min-height: 20rem;
}

.technology-card{

    padding: 3rem;
    background-image: $secondary_gradient;
    border-radius: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > * {
        // padding: 1rem 5rem ;
    }

    .heading {
        margin-bottom: 3rem;
    }

    &__image {
        width: 100%;
        img {
            object-fit: contain;
            margin-bottom: 3rem;
        }

    }
}
</style>