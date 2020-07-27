const { default: axios } = require('axios')

class SwotService {
    constructor () {
        /**
         * @todo Replace with deployed ip
         */
<<<<<<< HEAD
        this.URI =
          "http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/employees"; 
=======
        this.URI = 'http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/employees'; 
>>>>>>> 4bf1eb1ef2527d699740808a98a866f341a6bbbe
    }

    sendSWOT(user_id, SWOT) {
        return axios.post(this.URI + '/' + user_id.toString(), SWOT)
    }
}

export default SwotService;
