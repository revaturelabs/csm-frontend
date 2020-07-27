import { combineReducers } from "redux";
import batchReducer from './batchReducer';
import managerReducer from './managerReducer';
import evalReducer from './evalReducer';
import swotReducer from "./swotReducer";

export default combineReducers({
  batchReducer,
  managerReducer,
  evalReducer,
  swotReducer,
});
