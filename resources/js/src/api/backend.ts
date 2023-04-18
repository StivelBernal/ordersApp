import axios from 'axios'

const backend = axios.create({
  baseURL: process.env.MIX_BACKEND_URL + 'api',
})

export default backend
