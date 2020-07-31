const { default: axios } = require('axios')

class ManagerService {
  constructor() {
    this.URI = "http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/managers";
  }

  login(id) {
    // login to validate manager id
    let config = {
      method: "POST",
      url: `${this.URI}/${id}`,
      validateStatus: function (status) {
        return status >= 200 && status < 400
      }
    }
    return axios(config);
  }
}

export default ManagerService;