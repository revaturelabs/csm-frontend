const { default: axios } = require('axios')

class AssociateService {
    constructor() {
        this.URI =
          "http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/employees";  // for testing with backend
    }

    getAssociatesByManager(managerId) {
        return axios({
            method: 'GET',
            url: `${this.URI}/manager/${managerId}`,
            withCredentials: true
        });
    }
  
    getAssociatesInformation(userID) {
        return axios({
            method: 'GET',
            url: `${this.URI}/${userID}`,
            withCredentials: true
        });
    }
  
    getEvaluations(userID) {
        return axios({
            method: 'GET',
            url: `${this.URI}/${userID}/evaluations`,
            withCredentials: true
        });
    }
}

export default AssociateService;


