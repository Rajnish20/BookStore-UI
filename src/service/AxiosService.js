const axios = require('axios').default;

class AxiosService {
  getService(url = '', tokenRequired = false, httpOptions = null) {
    return axios.get(url, tokenRequired && httpOptions);
  }
}
module.exports = new AxiosService();