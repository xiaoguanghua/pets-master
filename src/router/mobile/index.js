import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/mobile/HelloWorld'
// import MobilePage from '@/components/mobile/mobilePage'
import secretPage from '@/components/mobile/secretPage'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/secretPage',
      name: 'secretPage',
      component: secretPage
    }
  ]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router
