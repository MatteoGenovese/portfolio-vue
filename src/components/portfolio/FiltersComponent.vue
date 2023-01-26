<template>
    <div class="filter ">
        <button type="button" class="cs-btn" :class="activeButton ? 'cs-btn__outline-custom--active' : 'cs-btn__outline-custom'"
            @click="$emit('changeActive', tagIndex), changeActive()">
            {{ tag.tag }}
        </button>

        <!-- <button v-else
                type="button"
                class="btn btn__custom"
                @click="$emit('changeActive', tagIndex ), activeButton=!activeButton">
            {{ tag.tag }}
        </button> -->
    </div>
</template>

<script>

export default {
    // name: 'FiltersComponent',
    components: {},
    methods: {
        changeActive() {
            this.activeButton = !this.activeButton;
            // console.log(this.activeButton);
        }
    },
    props: {
        tag: {
            require: true,
            type: Object
        },
        tagIndex: {
            require: true,
            type: Number
        }
    },
    data: function () {
        return {
            activeButton: false,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/portfolio/app.scss';

.filter{

    padding: 0.5rem 1rem;
    @include respond(phone) { 
        padding: 0.2rem 0.5rem;
    }
    


    button.cs-btn {

        transition: all 0.2s ease-out;
        box-shadow: 0 1rem 2rem rgba($color: #000000, $alpha: .3);
        border: 1px solid rgba($secondary_color_light, 0.8);
        font-size: $default-font-size;
        padding: .5rem 1rem;
        border-radius: .5rem;

        @include respond(phone) { 
            padding: 0.2rem 0.5rem;
        }

        &__outline-custom {

            background-color: $primary_color_light;
            color: $secondary_color_light;

            @media (hover: hover) {
                &:hover {
                    background-color: $secondary_color_light;
                    color: $primary_color_light;
                    scale: 1.1;
                    transform: translateY(-0.3rem);
                }
            }

            &--active {
                background-color: $secondary_color_light;
                color: $primary_color_light;
                scale: 1.1;
                transform: translateY(-0.3rem);
            }
        }
    }
}
</style>