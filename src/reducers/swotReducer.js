let initialState = {
  categories: [],
  displayCategories: []
};

const swotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateCategories':
        return Object.assign({}, state, { categories: action.getCategories })
    case 'updateDisplayCategories':
        return Object.assign({}, state, { displayCategories: action.getDisplayCategories })
    default:
      return state;
  }
};

export default swotReducer;
