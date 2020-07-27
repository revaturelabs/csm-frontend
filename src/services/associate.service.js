const { default: axios } = require('axios')

class AssociateService {
    constructor() {
        this.URI = 'http://localhost:5000/employees';  // for testing with backend
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
    getEvaluations(userid) {
        return axios({
            method: 'GET',
            url: `${this.URI}/${userid}/evaluations`,
            withCredentials: true
        });
    }
}

export default AssociateService;


