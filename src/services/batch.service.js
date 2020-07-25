const { default: axios } = require('axios')

class BatchService {
    constructor() {
        this.URI = 'http://localhost:5000/batches';  // for testing with backend
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
