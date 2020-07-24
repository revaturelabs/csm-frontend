import { combineReducers } from "redux";
import batchReducer from "./batchReducer";
import managerReducer from "./managerReducer";
import swotReducer from "./swotReducer";

export default combineReducers({
  batchReducer,
  managerReducer,
  swotReducer
});
