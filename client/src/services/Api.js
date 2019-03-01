import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: 'http://ec2-3-17-148-97.us-east-2.compute.amazonaws.com:8081/'
    baseURL: 'http://localhost:8081/'
  })
}