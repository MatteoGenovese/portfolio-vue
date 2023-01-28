<template>
    <div id="CardList">

        <div class=" d-flex justify-content-center mb-5">
            <h1>                        
                {{ $t('my-projects.title-composition.first-word') }} 
                {{ $t('my-projects.title-composition.second-word') }} 
                <span class="fw-bold text-marked">                 
                    {{ $t('my-projects.title-composition.third-word') }} 
                </span>
            </h1>
        </div>
        <div class="container">

            <div class="d-flex flex-wrap justify-content-center filtersComponent mb-3">
                <FiltersComponent v-for="(tag, index) in tagToShow" :key="index" :tag="tag" :tagIndex="index"
                    @changeActive="changeActive" />
            </div>

            <div v-if="!checkIfFilterIsActive()" class="mb-3 text-center cardlist__search-result"> 
                {{ $t('my-projects.found-message.totals') }} : 
                {{ $t("my-projects.works").length }}                 
                {{ $t('my-projects.found-message.projects') }}
            </div>
            <div v-if="worksFiltered.length > 1 && checkIfFilterIsActive()" class="mb-3 text-center cardlist__search-result"> 
                {{ $t('my-projects.found-message.found-results') }} : 
                {{ worksFiltered.length }}                 
                {{ $t('my-projects.found-message.results') }}
            </div>
            <div v-if="worksFiltered.length == 1 && checkIfFilterIsActive()" class="mb-3 text-center cardlist__search-result">
                {{ $t('my-projects.found-message.found-result') }} : 
                {{ worksFiltered.length }}                 
                {{ $t('my-projects.found-message.result') }}
            </div>

            <div class="row cardList g-3">
                <div class="col-12 col-lg-6 g-5" v-for="work, index in worksFiltered" :key="index">
                    <SingleCard :work="work" />
                </div>
            </div>

        </div>

    </div>
</template>

<script>

import SingleCard from '@/components/portfolio/SingleCard.vue'
import FiltersComponent from '@/components/portfolio/FiltersComponent.vue'


export default {
    //   name: 'CardList',
    components: {
        SingleCard,
        FiltersComponent
    },
    methods: {
        findAllTags() {
            this.$t("my-projects.works").forEach(work => {
                work.tags.forEach(tag => {
                    if (!this.searchTags.includes(tag)) {
                        this.searchTags.push(tag);
                    }
                });
            });
            this.searchTags.forEach(tag => {
                this.tagToShow.push({
                    'tag': tag,
                    'active': false
                });
            });
            this.searchTags = [];
        },

        changeActive(tagIndex) {
            this.tagToShow[tagIndex].active=!this.tagToShow[tagIndex].active;
            this.filteringProject(tagIndex);
            // console.log(this.tagToShow[0].active);
        },

        checkIfFilterIsActive() {
            var areTagsActive = false;
            this.tagToShow.forEach(tag => {
                if (tag.active) {
                    areTagsActive = true;
                }
            });
            if (areTagsActive) {
                return true;
            }
            else {
                return false;
            }
        },
        filteringProject(tagIndex) {
            this.filteredTag = [];
            
            this.filteredTag = this.tagToShow.filter(tag => {
                if (tag.active)
                    return true;
            })

            console.log(this.filteredTag , this.tagToShow)
            if (this.checkIfFilterIsActive()) {
                this.worksFiltered = [];
                this.$t("my-projects.works").forEach(work => {
                    for (let index = 0; index < this.filteredTag.length; index++) {
                        if ((work.tags).includes(this.filteredTag[index].tag)) {
                            this.worksFiltered.push(work);
                            break;
                        }
                    }
                });
                this.filteredTag.forEach(tag => {
                });
            }
            else
                this.worksFiltered = this.$t("my-projects.works");
        }
    },
    data: function () {
        return {
            lang: this.$store.state.lang,
            filteredTag: [],
            searchTags: [
                // 'Spring',
                // 'Java',
                'Laravel',
                'Vue.js',
                'PHP',
                'JavaScript',
                'Axios',
                'Sass',
                'Html+Css'
            ],
            tagToShow: [],
            worksFiltered: [],

        }
    },
    mounted() {
        this.worksFiltered = this.$t("my-projects.works");
        this.findAllTags();
    },

}
</script>

<style lang="scss" >
@import '../../sass/portfolio/app.scss';
.portfolio{
    .cardlist{
        &__search-result{
            font-size: $default-font-size;
        }
    }
}

</style>
