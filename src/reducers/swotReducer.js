const initialState = {
    associate: {
        name: 'associate'
    },
    notes: '',
}

const swotReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'updateNotes':
            return Object.assign({}, state, {notes: action.notes})
        default:
            return state;
    }
}

export default swotReducer;
