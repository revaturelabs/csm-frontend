const { default: axios } = require('axios')

class ManagerService {
<<<<<<< HEAD
    constructor() {
        this.URI = 'http://localhost:5000/managers';
    }
=======
  constructor() {
    this.URI = "http://localhost:5000/managers";
  }
>>>>>>> 7ba30ffc46581d1e6d208365e45aca8e74bc14f4

  login(id) {
    // login to validate manager id
    return axios({
      // method: 'POST', //this is the official
      method: "GET", //this is for testing
      url: `${this.URI}/${id}`,
      withCredentials: true,
    });
  }
}

export default ManagerService;
