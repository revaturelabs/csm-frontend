const initialState = {
    technologies: [],
    spiderData: [],
    batchSpiderData:[],
    qcLabels: [],
    qcValues: [],
}

function evalReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'getTechnologies':
            return Object.assign({}, state, {technologies: action.technologies})
        case 'setQCLabels':
            return Object.assign({}, state, {qcLabels: action.qcLabels})
        case 'setQCValues':
            return Object.assign({}, state, {qcValues: action.qcValues})
        default:
            return state;
    }
}


export default evalReducer;