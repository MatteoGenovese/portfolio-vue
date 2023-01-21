<template>
    <section id="FooterComponent" class="d-flex">

        <div class="d-flex container align-content-center align-items-center h-100 w-100">
            <div  class="d-flex justify-content-around w-100" >
                <ContactMe />
                <GitHubProfile />
            </div>
        </div>

    </section>
</template>

<script>

import ContactMe from './ContactMe.vue';
import GitHubProfile from './GitHubProfile.vue';

export default {

    components: {
        ContactMe,
        GitHubProfile
    }

}
</script>

<style lang="scss">
#FooterComponent {
    height: 10rem;
    background-color: #0F2027;
    color: white;
}
</style>