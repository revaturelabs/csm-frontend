const { default: axios } = require('axios')

class AssociateService {
    constructor() {
        // this.URI = 'localhost:5000/employees';  // for testing with backend
        this.URI = 'http://127.0.0.1:3100/employees'; // for testing with mock server
    }

    // manager is staging manager, not trainer
    getAssociatesByManager(managerId) {
        return axios({
            method: 'GET',
            url: `${this.URI}/manager/${managerId}`,
            withCredentials: true
        });
    }
    //gets all associates
    getAssociates() {
        return axios({
            method: 'GET',
            url: `${this.URI}`,
            withCredentials: true
        });
    }
    //gets eval data for one associate
    getAssociateEvaluations(userID) {
        return axios({
            method: 'GET',
            url: `${this.URI}/${userID}/evaluations`
        })
    }

}

export default AssociateService;
