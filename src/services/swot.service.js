const { default: axios } = require('axios')

class SwotService {
    constructor () {
        /**
         * @todo Replace with deployed ip
         */
        this.URI = 'http://localhost:5000/employees'; 
    }

    sendSWOT(user_id, SWOT) {
        return axios.put(this.URI + '/' + user_id.toString(), SWOT)
    }
}

export default SwotService;
