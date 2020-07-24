const { default: axios } = require('axios')

class ManagerService {
    constructor() {
<<<<<<< HEAD
        this.URI = 'http://localhost:5000/managers';
=======
        this.URI = 'http://localhost:5000/managers'; 
>>>>>>> d822b9384fbdaefd6e36d4865231188cc2dff18d
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
