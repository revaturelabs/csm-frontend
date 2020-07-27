const { default: axios } = require('axios')

class BatchService {
    constructor() {
        this.URI =
          "http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/batches";  // for testing with backend
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
