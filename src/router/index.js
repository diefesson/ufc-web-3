import { createRouter, createWebHistory } from 'vue-router'
import PostPage from '../views/PostPage.vue'
import AlbumPage from '../views/AlbumPage.vue'
import TodoPage from '../views/TodoPage.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: PostPage
  }, {
    path: '/posts',
    name: 'Posts',
    component: PostPage
  }, {
    path: '/albuns',
    name: 'Albuns',
    component: AlbumPage
  },  {
    path: '/todos',
    name: 'Todos',
    component: TodoPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
