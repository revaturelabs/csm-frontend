import { combineReducers } from "redux";
// import reducer1
// import reducer2... etc.
import associateReducer from './associateListReducer'
import batchReducer from './batchReducer'
import managerReducer from './managerReducer'
export default combineReducers({
    associateReducer,
    batchReducer,
    managerReducer
})

