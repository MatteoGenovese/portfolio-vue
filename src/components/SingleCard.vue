<template>
<div v-if="work.visible" class="wrapper" 
    @click="cardToggle()"
    :class="isFrontActive ? 'active' : 'back'">
        <div class="card h-100">

            <div class="card__front"  >
                <img :src="require(`../assets/works/${work.imageName}`)" :alt="work.imageName" class="img-fluid">
            </div>

            <div class="card__back d-flex flex-column justify-content-between">
                <div class="content">
                    <h2>{{ work.title }}</h2>
                    <p v-html="work.description"></p>
                </div>

                <div class="link">
                    <a v-if="work.webSiteLink" :href="work.webSiteLink" class="btn btn-info">
                        View more
                    </a>
                    <a v-else  class="d-none">
                        View more
                    </a>

                    <a :href="work.gitHubLink" class="btn btn-primary ms-2">
                        GitHub link
                    </a>
                    <div class="tags">
                        Tags:
                        <span v-for="(tag, index) in work.tags" :key="index">
                            #{{ tag }}
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
            this.isFrontActive=!this.isFrontActive;
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

<style lang="scss">
@import '../sass/app.scss';


.wrapper{
    height: 50rem;
    perspective: 90rem;

    .card {
        box-shadow: 2rem -2rem 2rem rgba(0, 0, 0, 0.255);
        -moz-box-shadow: 1rem -1rem 0.5rem rgba(0, 0, 0, 0.255);
        -webkit-box-shadow: 1rem -1rem 0.5rem rgba(0, 0, 0, 0.255);
        -o-box-shadow: 1rem -1rem 0.5rem rgba(0, 0, 0, 0.255);
        
        height: 100%;
        text-align: center;
        transition: all 0.75s cubic-bezier(0.7, -.5, 0.3, 1.8);
        transform-style: preserve-3d;
        border-radius: 0.5rem;
        position: relative;


        &__front {
            overflow: hidden;
            cursor: pointer;
            backface-visibility: hidden;
            background-size: contain;
            background-position: center center;
            background-color: transparent;
        }

        &__back {
            overflow: scroll;
            padding: 4rem 4rem;
            position: absolute;
            background-color: $primary_color_light;
            .content {
                h2 {
                    font-size: 3.5rem;
                    margin-bottom: 2rem;
                    font-weight: 300;
                }
                p {
                    font-size: $default-font-size;
                    margin: 1rem 0;
                    font-weight: 300;
                    text-align: justify;
                    text-justify: inter-word;
                }
                h4 {
                margin: 0;
                }
            }
            // top: 100%;
        }

        &__front,
        &__back {
            height: 100%;
            width: 100%;
            position: absolute;
            border-radius: 0.5rem;
            top: 0;
            left: 0;
            backface-visibility: hidden;
            img {
                width: 100%;
                object-fit: contain;
            }
        }
    }
}


@media (hover: hover)
{
    .wrapper:hover .card {
        transform: rotateY(180deg);
    }



    .card__back {
        transform: rotateY(180deg);
        position: absolute;
    }


}

@media (hover: none)
{

    .wrapper.back .card {
        transform: rotateY(180deg);
    }



    .card__back {
        transform: rotateY(180deg);
        position: absolute;
    }
    
}



.link {
  .tags {
      margin-top: 0.5rem;
  }
}

a.btn{
  transition: all 0.2s ease-out;
  font-size: $default-font-size;

  &:hover {
      scale: 1.1;
      transform: translateY(-0.3rem);
  }
}


</style>