// Implement hooks here to mock them in a test function.
import { useSelector as originalUseSelector } from "react-redux";
import { useDispatch as originalUseDispatch } from "react-redux";
import { useHistory as originalUseHistory } from "react-redux";
import { useLocation as originalUseLocation } from "react-redux";

export const useSelector = state => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();
export const useHistory = path => originalUseHistory(path);
export const useLocation = () => originalUseLocation();
