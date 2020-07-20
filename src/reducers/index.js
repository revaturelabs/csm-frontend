import { combineReducers } from "redux";

import associateReducer from './associateListReducer'
import managerReducer from './managerReducer'
export default combineReducers({
    associateReducer,
    managerReducer
})

