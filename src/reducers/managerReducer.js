const initialState = {
  manager: {_id: '', username: ''},
  email: ''
}

function managerReducer(state = initialState, action) {
  switch (action.type) {
    case 'login':
      return Object.assign({}, state, { manager: action.manager })
    case 'handleEmail':
      return Object.assign({}, state, { email: action.email })
    default:
      return state;
  }
}

export default managerReducer;