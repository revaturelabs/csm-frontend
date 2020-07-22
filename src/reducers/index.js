import { combineReducers } from "redux";
import swotReducer from "./swotReducer";
import managerReducer from './managerReducer'
export default combineReducers({
    managerReducer,
    swotReducer
})


