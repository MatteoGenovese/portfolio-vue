<template>
    <div class="Filter mx-4 mb-4">
        <button 
                type="button"
                class="btn"
                :class="!activeButton ? 'btn__outline-custom': 'btn__custom'"
                @click="$emit('changeActive', tagIndex ), changeActive()">
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
    components: {    },
    methods: {   
        changeActive (){
            this.activeButton=!this.activeButton;
            // console.log(this.activeButton);
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
    data: function () {
        return {
            activeButton: false,
        }
    }
}
</script>

<style lang="scss">
@import '../sass/app.scss';
button.btn{

    transition: all 0.2s ease-out;
    box-shadow: 0 1rem 2rem rgba($color: #000000, $alpha: .3);
    border: 1px solid rgba($secondary_color_light, 0.8);
    font-size: $default-font-size;

    &__outline-custom{
        color: $secondary_color_light;
        background-color: $primary_color_light;

        &:hover{
            color: $primary_color_light;
            background-color: $secondary_color_light;
            scale: 1.1;
            transform: translateY(-0.3rem);
        }

    }

    &__custom{
        color: $primary_color_light;
        background-color: $secondary_color_light;

        &:hover{
            color: $primary_color_light;
            background-color: $secondary_color_light;
            scale: 1.1;
            transform: translateY(-0.3rem);
        }

    }


}
</style>