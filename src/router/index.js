import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AllProfiles from '@/components/AllProfiles'
import AddProfile from '@/components/AddProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/AllProfiles',
      name: 'ViewAllProfiles',
      component: AllProfiles
    },
    {
      path: '/NewProfile',
      name: 'AddProfile',
      component: AddProfile
    }
  ]
})
