import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/pages/BookList'
import BookDetail from '@/components/pages/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'book-list',
      component: BookList
    },
    {
      path: '/:id',
      name: 'bookdetail',
      component: BookDetail
    }
  ]
})
