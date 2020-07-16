const { default: axios } = require('axios')

class CategoryService {
    constructor() {
        // TODO: Change this URI to the backend_uri/categories from the back end team.
        this.URI = 'http://34.82.182.44:80/mock/category/category';
    }

    getCategories() {
        return axios({
            method: 'GET',
            url: this.URI
        })
    }
}

export default CategoryService;
