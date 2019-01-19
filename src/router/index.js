import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import Edit from '@/components/Edit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {

      path:'/add',
      name:'add',
      component: AddSmoothie
    },

    {

      path:'/edit/:slug',
      name:'Edit',
      component: Edit
    }

  ]
})
