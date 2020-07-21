const initialState = {
    batches:[], //batches will each contain an array of associates
}

function displayAssociatesReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'updateBatches':
            return Object.assign({}, state, {batches: action.batches})
        default:
            return state;
    }
}


export default displayAssociatesReducer;