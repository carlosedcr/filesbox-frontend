import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teste-backend-carlos.herokuapp.com'
})

export default api;