const { default: axios } = require('axios')

class CategoryService {
    constructor() {
        /**
         * @todo Replace with deployed ip
         */
        this.URI = 'http://localhost:5000/categories';
    }

    getCategories() {
        return axios({
            method: 'GET',
            url: this.URI
        })
    }
}

export default CategoryService;
