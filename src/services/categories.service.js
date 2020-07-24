const { default: axios } = require("axios");

class CategoryService {
  constructor() {
    /**
     * @todo Replace with deployed ip
     */
    this.Categories_URI = "http://localhost:5000/categories";
  }

  getCategories() {
    return axios.get(this.Categories_URI);
  }
}

export default CategoryService;
