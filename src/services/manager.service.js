const { default: axios } = require('axios')

class ManagerService {
    constructor() {
        this.URI = 'http://localhost:5000/managers'; // for testing with backend
    }

    login(id) {
        // login to validate manager id
        return axios({
            method: 'GET',
            url: `${this.URI}/${id}`,
            withCredentials: true
        })
    }
}

export default ManagerService;