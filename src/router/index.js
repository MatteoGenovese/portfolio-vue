import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePortfolio from '../views/portfolio/HomePortfolio.vue'
import HomeBoolflix from '../views/boolflix/HomeBoolflix.vue';
import HomeCargoProject from '../views/cargoproject/HomeCargoProject.vue';
import BoolzApp from '../views/boolzapp/BoolzApp.vue'
import HomeDCComics from '../views/dccomics/HomeDCComics.vue'


import i18n from '../i18n'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/',
            redirect: `/${i18n.locale}/`

        },
        {
            path: '/boolflix/',
            name: 'boolflix',
            component: HomeBoolflix
        },
        {
            path: '/boolzapp/',
            name: 'boolzapp',
            component: BoolzApp
        },
        {
            path: '/dccomics/',
            name: 'dccomics',
            component: HomeDCComics
        },
        {
            path: '/cargoproject/',
            name: 'cargoproject',
            component: HomeCargoProject
        },
        {
            path: '/:lang/',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                    path: '',
                    name: 'home',
                    component: HomePortfolio
                },
                {
                    path: '*',
                    redirect: `/${i18n.locale}/`
                }
            ],
        },
        {
            path: '/*',
            redirect: `/${i18n.locale}/`
        }
    ]
})

export default router