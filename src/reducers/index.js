import { combineReducers } from "redux";
import swotReducer from "./swotReducer";
import swotModalReducer from "./swotModalReducer";
// import reducer2... etc.

/* export default combineReducers({
    reducer1,
    reducer2
})*/
export default combineReducers({swotReducer, swotModalReducer})
