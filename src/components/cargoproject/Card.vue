<template>
    <div class="col-12 col-sm-4 g-2" v-if="need != 'links'">
        <div class="card d-flex flex-column " v-if="card.isFeedback == false && need == 'services'">
            <div class="card-img-container-fa d-flex justify-content-between">
                <div class="icon"><i :class="card.image_url"></i></div>
                <div class="arrow"><i class="fa-solid fa-arrow-right"></i></div>
            </div>
            <div class="card-title">
                {{ card.cardTitle }}
            </div>
            <div class="card-description">
                {{ card.cardDescription }}
            </div>
        </div>
        <div class="card d-flex flex-column position-relative " v-else-if="card.isFeedback == true && need == 'feedback'">
            <div class="card-img-container-png d-flex justify-content-between">
                <img :src="require(`../../assets/cargoproject/${card.image_url}`)" alt="" class="png">
            </div>
            <div class="card-title">
                {{ card.cardTitle }}
            </div>
            <div class="card-description">
                {{ card.cardDescription }}
            </div>
            <div class="quote-icon"><i class="fa-solid fa-quote-right"></i></div>
        </div>
    </div>
    <div class="card d-flex flex-column position-relative col-4 col-sm-4 categories" v-else-if="need == 'links'">
            <div class="card-title">
                {{ card.topic }}
            </div>
            <ul>
                <li v-for="(link,index) in card.links" :key="index" class="link">{{link}}</li>
            </ul>

        </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        card: {
            type: Object,
            required: true,
        },
        need: {
            type: String,
            required: true,
        },
    }

}
</script>

<style lang="scss">
@import "../../sass/cargoproject/app.scss";
.cargoproject{
div.card {
    // width: calc((100% / 3) - 2rem);
    background-color: rgba($third_color, 0.1);
    padding: 2rem 0.5rem;
}

div.card-img-container-fa {
    height: 6rem;
    margin-bottom: 1.6rem;

    img {
        height: 100%;
    }
}

div.card-img-container-png {
    height: 3rem;
    margin-bottom: 1.6rem;

    img {
        height: 100%;
        filter: invert(100%);
    }
}

div.card-title {
    font-size: 1.8rem;
    font-weight: 800;
}

.quote-icon {
    position: absolute;
    bottom: 4.8rem;
    right: 4.8rem;
    font-size: 2.5rem;
    i{
    color: $third_color;
    }

}

.icon {
    font-size: 2.5rem;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    background-color: rgba($fourth_color, $alpha: 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        color: $sixth_color;
    }
}

.arrow {
    font-size: 2rem;
    border-radius: 50%;
    i {
        color: rgba($fourth_color, $alpha: 0.3);
    }
}
ul{
    li.link{
    font-size: 1.3rem !important;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }

}
}
}

</style>