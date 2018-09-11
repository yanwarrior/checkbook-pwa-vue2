import axios from 'axios'

export default class BaseService {
  http = axios
  baseURL = 'http://it-ebooks-api.info/v1'

  buildEndpoint(endpoint) {
    return `${this.baseURL}${endpoint}`
  }
}