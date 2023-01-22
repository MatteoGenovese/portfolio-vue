import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePortfolio from '../views/HomePortfolio.vue'
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
            path: '/:lang',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                    path: '/',
                    name: 'home',
                    component: HomePortfolio
                },
                {
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