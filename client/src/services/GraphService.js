import Api from '@/services/Api'

export default {
  getStream () {
    return Api().get('stream')
  },
}