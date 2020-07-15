const initialState = {
    associate: {
        name: 'associate'
    },
    genNotes: '',
}

const swotReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'updateNotes':
            return Object.assign({}, state, {notes : action.updateNotes})
        default:
            return state;
    }
}

export default swotReducer;
