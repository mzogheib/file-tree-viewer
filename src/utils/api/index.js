import axios from 'axios'

const url = 'https://chal-locdrmwqia.now.sh/'

const get = () => {
  return new Promise((resolve, reject) => {
    axios({ method: 'GET', url })
      .then(response => resolve(response.data))
      .catch(reject)
  })
}

export default {
  get,
}
