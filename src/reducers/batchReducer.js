const initialState = {
    batches:[], //batches will each contain an array of associates
    displayBatches:[],
    activeFilter: 'myAll'

}

function batchReducer(state = initialState, action) {
    switch(action.type) {
        case 'updateBatches':
            return Object.assign({}, state, {batches: action.batches})
        case 'updateDisplayBatches':
            return Object.assign({}, state, {displayBatches: action.batches})
        case 'updateFilter':
            return Object.assign({}, state, {activeFilter: action.filter})
        default:
            return state;
    }
}

export default batchReducer;
