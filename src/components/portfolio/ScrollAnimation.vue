<template>
    <div class="scroll-indicator fa fa-chevron-down"></div>
</template>

<script>


export default {

  components: {

  }
}

</script>

<style lang="scss" scoped>
@import '../../sass/portfolio/app.scss';
    .scroll-indicator {
        position: absolute;
        opacity: 30%;
        left: 50%;
        transform: translate(-50%);
        top: 80%;
        font-size: 50px;
        -webkit-animation: bounce 1s 3;
        animation: bounce 1s 3;
    }
    
    @-webkit-keyframes bounce {
        0% {
            top: 80%;
        }
        50% {
            top: 85%;
        }
        100% {
            top: 80%;
        }
    }
    
    @keyframes bounce {
        0% {
            top: 80%;
        }
        50% {
            top: 85%;
        }
        100% {
            top: 80%;
        }
    }
</style>