import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import NetworkError from '@/views/NetworkError.vue'
import EventLayout from '@/views/event/EventLayout.vue'
import EventDetails from '@/views/event/EventDetails.vue'
import {inject} from "vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Events',
      component: EventListView,
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/about-us',
      name: 'About',
      // an example of alias, but be careful its loads same content in both locations
      // if u care about SEO better not use it as redirecting solutions
      // because same content in different locations mb penalize by google
      alias: '/why-us',
      component: () => import('@/views/AboutView.vue')
    },
    {
      // an example of redirect if url is "/about" it will redirect to "/about-us"
      path: '/about',
      redirect: {name: 'About'}
    },
    {
      path: '/event/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: () => import('@/views/event/EventRegister.vue')
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: () => import('@/views/event/EventEdit.vue'),
          meta: { requireAuth: true}
        },
      ]
    },
    {
      // path: '/meetup/:id',
      // we can redirect dynamic routes too, to do this we have to write function that return route with parameters
      // in this case parameters don't needed because it's the same parameter name
      // redirect: () => {
      //   return {name: 'EventDetails'}
      // }
      // but here's an example how it may look like:
      // redirect: to => {
      //   return {name: 'EventDetails', params: { id: to.params.id}}
      // }
      path: '/meetup/:pathAfter(.*)',
      redirect: to => {
        return { path: '/event/' + to.params.pathAfter}
      }
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: () => import('@/views/PageNotFound.vue'),
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('@/views/PageNotFound.vue')
    }
  ],
  scrollBehavior(to,from, savedPosition){
    if (savedPosition) return savedPosition
    else return {top: 0}
  }
})
router.beforeEach((to, from) => {

  const notAuthorized = true

  if (to.meta.requireAuth && notAuthorized) {
    const GStore = inject('GStore')

    const stopTimeout = setTimeout(() =>{
      GStore.flashMessage = ''
    }, 3000)

    if (GStore.flashMessage) clearTimeout(stopTimeout)
    GStore.flashMessage = 'Sorry, you are not authorized to view this page'

    if (from.href) {
      return false
    } else {
      return {path: '/'}
    }
  }
})

export default router
