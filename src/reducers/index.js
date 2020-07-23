import { combineReducers } from "redux";
import batchReducer from './batchReducer'
import managerReducer from './managerReducer'


export default combineReducers({
    batchReducer,
    managerReducer,
})

