import BaseService from '@/services/BaseService'


class BookService extends BaseService {

  all(endpoint, query) {
    return this.http.get(this.buildEndpoint(`${endpoint}${query}`))
    .then(resp => resp)
    .catch(err => console.log(err))
  }

  get(endpoint, id) {
    return this.http.get(this.buildEndpoint(`${endpoint}${id}`))
    .then(resp => resp)
    .catch(err => console.log(err))
  }
}

export default BookService