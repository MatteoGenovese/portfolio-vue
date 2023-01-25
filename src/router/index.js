import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePortfolio from '../views/portfolio/HomePortfolio.vue'
import HomeBoolflix from '../views/boolflix/HomeBoolflix.vue';
import HomeCargoProject from '../views/cargoproject/HomeCargoProject.vue';


// import ComingSoonComponent from '../views/ComingSoonComponent.vue'
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