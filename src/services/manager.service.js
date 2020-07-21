const { default: axios } = require('axios')

class ManagerService {
    constructor() {
        this.URI = 'localhost:5000/manager'; // for testing with backend
        // this.URI = 'http://127.0.0.1:3101/managers'; // for testing with mockserver
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