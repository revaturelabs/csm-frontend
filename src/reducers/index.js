import { combineReducers } from "redux";
// import reducer1
// import reducer2... etc.
import associateReducer from './associateListReducer'
import batchReducer from './batchReducer'
import evalReducer from './evalReducer'
export default combineReducers({
    associateReducer,
    batchReducer, 
    evalReducer
  //  reducer2
})

