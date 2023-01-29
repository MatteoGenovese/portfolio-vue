<template>
    <header>
        <section class="contacts">
            <div class="container w-100 contacts__container">
                <div class="row d-flex justify-content-center w-100">

                    <div class="contacts__open-hours col-6 col-sm-5 col-md-6"><span><i class="fa-solid fa-clock"></i> {{ contacts.openHours }}</span></div>
                    <div class="contacts__telephone col-6 col-sm-3 offset-md-1 col-md-2"><span><i class="fa-solid fa-phone"></i> {{ contacts.telephoneNumber }}</span></div>
                    <div class="contacts__email col-6 col-sm-3 col-md-2"><span><i class="fa-solid fa-envelope"></i> {{ contacts.email }}</span></div>
                    <div class="contacts__social col-6 col-sm-1 col-md-1">
                        <span class=" d-flex">

                            <div id="facebook-icon" class=" ms-2"><i class="fa-brands fa-facebook-f"></i></div>
                            <div id="tweeter-icon" class=" ms-2"><i class="fa-brands fa-twitter"></i></div>
                            <div id="linkedin-icon" class=" ms-2"><i class="fa-brands fa-linkedin-in"></i></div>

                        </span>
                    </div>
                </div>

            </div>
        </section>
    </header>
</template>

<script >




export default {
    name: 'Header',
    props: {
        pages: {
            type: Array,
            required: true,
        },
        contacts: {
            type: Object,
            required: true,
        },
    },

    // add things here

}
</script>

<style lang="scss">
@import "../../sass/cargoproject/app.scss";
.cargoproject{

header{
    font-size: 1.1rem;
}

.contacts {
    background-color: $seventh_color;
    color: $second_color;
    height: 4rem;

    &__container{
        align-items: center;
        height: 100%;
        &>*{
            height: 100%;
        }
    }


    &__open-hours,
    &__telephone,
    &__email,
    &__social{
        display: flex;
        align-items: center;
        @include respond(tab-land) {
            font-size: 100%;
        }
        @include respond(tab-port) { 
            font-size: 85%; 
            height: 100%;
        }
        @include respond(phone) { 
            font-size: 75%; 
            height: 2rem;        
            justify-content: center;
        }
    }
    &__social {
        display: flex;
    }
}
}
</style>