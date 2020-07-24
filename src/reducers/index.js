import { combineReducers } from "redux";
import swotReducer from "./swotReducer";
import batchReducer from './batchReducer'
import managerReducer from './managerReducer'


export default combineReducers({
    managerReducer,
    swotReducer,
    batchReducer,
})


