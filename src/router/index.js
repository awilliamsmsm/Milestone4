import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profiles from '@/components/Profiles'
import AddProfile from '@/components/AddProfile'
import ProfileView from '@/components/ProfileView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Profiles',
      name: 'ViewAllProfiles',
      component: Profiles
    },
    {
      path: '/NewProfile',
      name: 'AddProfile',
      component: AddProfile
    },
    {
      path: '/ProfileView',
      name: 'ProfileView',
      component: ProfileView
    }
  ]
})
