const { default: axios } = require('axios')

class AssociateService {
    constructor() {
        // this.URI = 'localhost:5000/employees';  // for testing with backend
        this.URI = 'http://127.0.0.1:3100/employees'; // for testing with mock server
    }

    getAssociatesByManager(managerId) {
        return axios({
            method: 'GET',
            url: `${this.URI}/manager/${managerId}`,
            withCredentials: true
        });
    }
    getAssociatesInformation() {
        return axios({
            method: 'GET',
            url: `${this.URI}`,
            withCredentials: true
        });
    }
    getSpiderInformation(userid) {
        return axios({
            method: 'GET',
            url: `${this.URI}/${userid}`,
            withCredentials: true
        });
    }
}

export default AssociateService;
