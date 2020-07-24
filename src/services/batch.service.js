const { default: axios } = require('axios')

class BatchService {
    constructor() {
        this.URI = 'http://localhost:5000/batches'; 
    }

    // returns all batches
    getBatches() {
        return axios({
            method: 'GET',
            url: `${this.URI}`,
            withCredentials: true
        });
    }
}

export default BatchService;
