import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePortfolio from '../views/HomePortfolio.vue'
// import ComingSoonComponent from '../views/ComingSoonComponent.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomePortfolio
    },
    // {
    //     path: '/comingsoon',
    //     name: 'ComingSoon',
    //     component: ComingSoonComponent
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router