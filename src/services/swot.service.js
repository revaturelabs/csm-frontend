const { default: axios } = require('axios')

class SwotService {
    constructor () {
        /**
         * @todo Replace with deployed ip
         */
        this.URI = 'http://localhost:5000/employees';
    }

    getSwots(user_id) {
        return axios.get(this.URI + '/' + user_id.toString());
    }

    sendSWOT(user_id, SWOT) {
        return axios.post(this.URI + '/' + user_id.toString(), SWOT);
    }
}

export default SwotService;
