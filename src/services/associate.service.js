const { default: axios } = require('axios')

class AssociateService {
    constructor() {
        this.URI = 'http://localhost:5000/employees';
    }

    getAssociatesByManager(managerId) {
        return axios({
            method: 'GET',
            url: `${this.URI}/manger/${managerId}`,
            withCredentials: true
        });
    }
}

export default AssociateService;
