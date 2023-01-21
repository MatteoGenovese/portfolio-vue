<template>
    <div class="scroll-indicator fa fa-chevron-down"></div>
</template>

<script>


export default {

  components: {

  }
}

</script>

<style lang="scss">
    @import '../sass/app.scss';
    .scroll-indicator {
        position: absolute;
        opacity: 30%;
        left: 50%;
        top: 90%;
        font-size: 50px;
        -webkit-animation: bounce 1s 3;
        animation: bounce 1s 3;
    }
    
    @-webkit-keyframes bounce {
        0% {
            top: 90%;
        }
        50% {
            top: 95%;
        }
        100% {
            top: 90%;
        }
    }
    
    @keyframes bounce {
        0% {
            top: 90%;
        }
        50% {
            top: 95%;
        }
        100% {
            top: 90%;
        }
    }
</style>