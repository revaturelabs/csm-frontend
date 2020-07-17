let initialState = false;

const swotModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'toggleSwotModal':
            return action.toggle
        default:
            return state
    }
}


export default swotModalReducer;