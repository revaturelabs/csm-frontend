const initialState = {
    manager: {id: ''},
    email: ''
}

function managerReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
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