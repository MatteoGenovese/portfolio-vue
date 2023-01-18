<template>
    <section id="MyProjects">
        <CardList />
    </section>

</template>

<script>

import CardList from '@/components/CardList.vue'
import FiltersComponent from '@/components/FiltersComponent.vue'

export default {
    name: 'MyProjects',
    components: {
        CardList,
        FiltersComponent
    }
}
</script>

<style lang="scss">

</style>