const { default: axios } = require("axios");

class CategoryService {
  constructor() {
    /**
     * @todo Replace with deployed ip
     */
    this.Categories_URI = "http://ec2-18-216-95-255.us-east-2.compute.amazonaws.com:5000/categories";
  }

  getCategories() {
    return axios.get(this.Categories_URI);
  }
}

export default CategoryService;
