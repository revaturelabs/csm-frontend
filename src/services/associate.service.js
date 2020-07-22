const { default: axios } = require('axios')

class AssociateService {
    constructor() {
        /**
		* @todo Replace with deployed ip
		*/
        this.associatesURI = 'http://localhost:5000/employees';
    }

    getAssociates() {
        return axios.get(this.associateURI);
    }

	getAssociate(uid) {
		return axios.get(`${this.associateURI}/${uid}/eval`);
	}
}

export default AssociateService;
