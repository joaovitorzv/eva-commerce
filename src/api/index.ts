import axios from 'axios'

const api = axios.create({
  baseURL: 'https:eva-test.herokuapp.com'
});

export default api