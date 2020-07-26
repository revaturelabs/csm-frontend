import { combineReducers } from "redux";
import batchReducer from "./batchReducer";
import managerReducer from "./managerReducer";
import swotReducer from "./swotReducer";
import evalReducer from "./evalReducer";

export default combineReducers({
  batchReducer,
  managerReducer,
  swotReducer,
  evalReducer
})

