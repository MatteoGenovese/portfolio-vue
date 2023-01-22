import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePortfolio from '../views/HomePortfolio.vue'
// import ComingSoonComponent from '../views/ComingSoonComponent.vue'
import i18n from '../i18n'


Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: `/${i18n.locale}`
    },
    {
        path: '/:lang',
        component: {
            render(c) { return c('router-view') }
        },
        children: [{
            path: '/',
            name: 'home',
            component: HomePortfolio
        }, ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router