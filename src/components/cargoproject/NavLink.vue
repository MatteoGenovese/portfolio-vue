<template>
  <li v-if="page.title!='numbers' && page.title!='getintouch' ">
    {{page.title}}
  </li>
</template>

<script>
export default {
    name:"NavLink",
    props:{
        page: {
            type: Object,
            required: true,
        },
    },

}
</script>

<style lang="scss">
.cargoproject{

.nav-bar li{

&:hover{
  cursor: pointer;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
}
&:active{
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.3);
}
}

}
</style>