const initialState = {
    technologies: [],
}

function spiderReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'getTechnologies':
            return Object.assign({}, state, {technologies: action.technologies})
        default:
            return state;
    }
}


export default spiderReducer;