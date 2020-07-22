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
        case 'setBatchLabels':
            return Object.assign({}, state, {batchLabels: action.batchLabels})
        case 'setBatchValues':
            return Object.assign({}, state, {batchValues: action.batchValues})
        case 'setAssociateLabels':
            return Object.assign({}, state, {associateLabels: action.associateLabels})
        case 'setAssociateValues':
            return Object.assign({}, state, {associateValues: action.associateValues})
            default:
            return state;
    }
}


export default evalReducer;