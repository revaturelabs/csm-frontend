const { default: axios } = require('axios')

class BatchService {
    constructor() {
        this.URI = 'localhost:5000/batches';  // for testing with backend
        //this.URI = 'http://127.0.0.1:3100/batches'; // for testing with mock server
    }

    // returns all batches
    getBatches() {
        console.log("sending request")
        return axios({
            method: 'GET',
            url: `${this.URI}`,
            withCredentials: true
        });
    }
}

export default BatchService;
