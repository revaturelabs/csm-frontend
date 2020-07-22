const initialState = {
    batches:[], //batches will each contain an array of associates
}

function batchReducer(state = initialState, action) {
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





// [batches
//     {batch1
//         batchID,
//         manager
//         trainer name,
//         promotion date,
//         associates [
//             {associate1
//                 name,
//                 # of swots
//                 email,
//                 userID (if different than email. Whatever we use to look up evaluations)
//             }
//         ]
//     }
//     ...
// ]