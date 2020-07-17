const initialState = {
    technologies: [],
}

function spiderReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'getTechnologies':
            return Object.assign({}, state, {associates: action.associates})
        default:
            return state;
    }
}


export default spiderReducer;