const { default: axios } = require('axios')

class SwotService {
    constructor () {
        /**
         * @todo Replace with deployed ip
         */
<<<<<<< HEAD
        this.URI = 'http://localhost:5000/employees';
    }

    getSwots(user_id) {
        return axios.get(this.URI + '/' + user_id.toString());
    }

    sendSWOT(user_id, SWOT) {
        return axios.post(this.URI + '/' + user_id.toString(), SWOT);
=======
        this.URI = 'http://localhost:5000/employees'; 
    }

    sendSWOT(user_id, SWOT) {
        return axios.post(this.URI + '/' + user_id.toString(), SWOT)
>>>>>>> d822b9384fbdaefd6e36d4865231188cc2dff18d
    }
}

export default SwotService;
