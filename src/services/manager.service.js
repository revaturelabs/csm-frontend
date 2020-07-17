const { default: axios } = require('axios')

class ManagerService {
    constructor(){
        this.URI = 'http://127.0.0.1:3100//manager';
    }

    login(username) {
        return axios({
            method: 'POST',
            url: `${this.URI}/login`,
            data: {
                username
            },
            withCredentials: true
        })
    }
}

export default ManagerService;