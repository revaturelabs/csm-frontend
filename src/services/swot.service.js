const { default: axios } = require('axios')

class SwotService {
    constructor () {
        /**
         * @todo Replace with deployed ip
         */
        this.URI =
          "http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/employees"; 
    }

    sendSWOT(user_id, SWOT) {
        return axios.post(this.URI + '/' + user_id.toString(), SWOT)
    }
}

export default SwotService;
