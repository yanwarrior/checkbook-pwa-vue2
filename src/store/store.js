import Vue from 'vue'
import Vuex from 'vuex'
import BookService from '@/services/BookService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    books: [],
    book: {},
    booksMeta: {},
    configs: {
      bookService: new BookService()
    }
  },
  getters: {
    pretyMetaBooks: (state) => {
      if (Object.keys(state.booksMeta).length > 0) {
        return `
        You have search results with a time 
        of ${state.booksMeta.time} second 
        and total ${state.booksMeta.total} data.
        `
      } 
    }
  },
  mutations: {
    getAllBook: (state, payload) => {
      // You can mutate state in 'mutations'.
      // Don't mutatae store state outside mutations handler
      // if strict mode set true.
      state.books = payload.data.Books 
      state.booksMeta = {
        time: payload.data.Time,
        total: payload.data.Total
      }
    },
    getBook: (state, payload) => {
      // service api endpoint not work for get detail ebook. Fuck !
      // this alternative for get product detail from state.
      // this solution can work if you start home page (list books).
      // if you start page detail book, this solution can't be work
      // because state cycle is set be empty.
      state.book = state.books.find(book => {
        return book.ID === payload.id
      })
    }
  },
  
  actions: {
    getAllBook: (context, payload) => {
      if (payload.query) {
        // this state only use, not mutate.
        context.state.configs.bookService.all('/search/', payload.query)
        .then(resp => {
          console.log(resp)
          context.commit('getAllBook', resp)
        })
        .catch(err => console.log(err))
      }
    },
    getBook: (context, payload) => {
      if (payload.id) {
        // this state only use, not mutate.
        // service api endpoint not work for get detail ebook. Fuck !
        context.commit('getBook', payload)
      }
    }
  }
})