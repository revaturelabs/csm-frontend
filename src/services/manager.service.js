const { default: axios } = require('axios')

class ManagerService {
    constructor() {
        this.URI = 'http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/managers'; 
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