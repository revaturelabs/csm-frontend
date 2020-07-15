import {createStore} from 'redux';

const initialState = {
    associates: [],
}

function associateReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'updateAssociates':
            return Object.assign({}, state, {associates:action.associates})
        default:
            return state;
    }
}


export default associateReducer;