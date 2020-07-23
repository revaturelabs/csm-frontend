const { default: axios } = require('axios')

class BatchService {
    constructor() {
        this.URI = 'http://127.0.0.1:5000/'; 
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
