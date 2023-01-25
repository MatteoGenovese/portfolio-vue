<template>
    <section id="MyProjects">
        <CardList />
    </section>

</template>

<script>

import CardList from '@/components/portfolio/CardList.vue'
import FiltersComponent from '@/components/portfolio/FiltersComponent.vue'

export default {
    name: 'MyProjects',
    components: {
        CardList,
        FiltersComponent
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/portfolio/app.scss';


</style>