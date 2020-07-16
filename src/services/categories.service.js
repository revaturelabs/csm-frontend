const { default: axios } = require('axios')

class CategoryService {
    constructor() {
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
