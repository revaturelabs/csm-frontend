const initialState = {
    spiderBatch: [],
    spiderAssociate: [],
    qcEvals: [],
    technologies: [],
    spiderData: [],
    batchSpiderData:[],
    qcLabels: [],
    qcValues: [],
}

function evalReducer(state = initialState, action) {
    switch(action.type) {
        case 'handleBatchSpiderData':
            return Object.assign({}, state, { spiderBatch: action.spiderBatch})
        case 'handleAssociateSpiderData':
            return Object.assign({}, state, { spiderAssociate: action.spiderAssociate })
        case 'handleQC':
            return Object.assign({}, state, { qcEvals: action.qcEvals })
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