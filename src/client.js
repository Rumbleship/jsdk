process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const Axios = require('axios');
class Client {
  constructor(env) {
    let baseURL;
    switch (env) {
      case 'local':
        baseURL = 'https://127.0.0.1:8080/v1';
        break;
      case 'staging':
        baseURL = 'https://api.staging-rumbleship.com/v1';
        break;
      case 'sandbox':
        baseURL = 'https://sandbox-api.rumbleship.com/v1';
        break;
      case 'production':
        baseURL = 'https://api.rumbleship.com/v1';
        break;
      default:
        baseURL = 'https://api.rumbleship.com/v1';
        break;
    }
    this.client = Axios.create({
      baseURL
    });
  }

  async loginAdmin(admin) {
    const authedResponse = await this.client.post('login', { admin });
    this.client.defaults.headers.Authorization = authedResponse.headers.authorization;
    return authedResponse.status;
  }

  async getPurcaseOrder(hashid) {
    return this.client.get(`purchase-orders/${hashid}`).then(res => res.data);
  }
}

module.exports = { Client };
