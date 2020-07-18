/*
		This occludes the information from the Jest library allowing the hooks to
		bypass Jest's requirement for all functions to be mocked. This allows hooks
		to operate properly within the test function and within the tested source
		file. Please instantiate all react-redux hooks used in unit testing within
		this single file. This allows a single import to handle all hooks functions
*/
import {
		useSelector as originalUseSelector,
		useDispatch as originalUseDispatch
} from "react-redux";

export const useSelector = state => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();
