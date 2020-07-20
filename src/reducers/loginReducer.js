const initialState = {
    username: '',
}

function spiderReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'login':
            return Object.assign({}, state, {username: action.username})
        default:
            return state;
    }
}


export default spiderReducer;