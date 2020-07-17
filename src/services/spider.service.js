const { default: axios } = require('axios')

class SpiderService {
    constructor() {
        // this.URI = 'localhost:5000/employees';  // for testing with backend
        this.URI = 'http://127.0.0.1:3100/employees'; // for testing with mock server
    }

    getSpiderInformation(userid) {
        return axios({
            method: 'GET',
            url: `${this.URI}/employee/${userid}`,
            withCredentials: true
        });
    }
}