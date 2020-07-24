const { default: axios } = require('axios')

class ManagerService {
    constructor() {
        this.URI = 'http://localhost:5000/manager'; // for testing with backend
    }

    login(id) {
        // login to validate manager id
        return axios({
            method: 'POST',
            url: `${this.URI}/${id}`,
            withCredentials: true
        })
    }
}

export default ManagerService;