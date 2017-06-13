import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Page/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    }
  ]
})
