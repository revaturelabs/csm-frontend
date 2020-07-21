const { default: axios } = require('axios')

class CategoryService {
    constructor() {
        /**
         * @todo Replace with deployed ip
         */
        this.Categories_URI = 'http://localhost:5000/categories';
        this.Batch_Categories_URI = 'http://localhost:5000/categories'
    }

    getCategories() {
        return axios.get(this.Categories_URI);
    }

    getBatchCategories() {
        return axios.get(this.Batch_Categories_URI);
    }

    postCategories(categories) {
        return axios.post(this.Categories_URI, categories);
    }
}

export default CategoryService;
