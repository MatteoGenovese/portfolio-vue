<template>
<div id="copyright">
    <div class="container h-100">
    <div class="d-flex align-items-center justify-content-between h-100">
        <div class="h-100 d-flex align-items-center">Enjoy the low price. We are tracking any intention of piracy.</div>
        <div class="h-100 d-flex align-items-center">© 2020 NEXGEN is Proudly Powered by &nbsp;<span class="green-text"> Codings</span>.</div>
    </div>

    </div>


</div>
  
</template>

<script>
export default {
    name:'Copyright',

}
</script>

<style lang="scss">
@import "../../sass/cargoproject/app.scss";
.cargoproject{

#copyright{
    height: 9rem;
    background-color: #000;
    color: $second_color;
    font-size: 1.1rem;

    .green-text{
        color: $sixth_color;
    }
}
}

</style>