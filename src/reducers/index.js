import { combineReducers } from "redux";
// import associateReducer from './associateListReducer'
import batchReducer from './batchReducer'
import managerReducer from './managerReducer'
import evalReducer from './evalReducer'

export default combineReducers({
    // associateReducer,
    batchReducer,
    managerReducer,
    batchReducer, 
    evalReducer
})

