import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Layout from '@/components/common/Layout'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/manage',
      component: Layout,
      children: [
        {
          path: '/manage/page1',
          name: 'page1',
          component: Page1
        },
        {
          path: '/manage/page2',
          name: 'page2',
          component: Page2
        },
        {
          path: '/manage/page3',
          name: 'page3',
          component: Page3
        }
      ]
    }
  ]
})
