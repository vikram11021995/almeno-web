import { combineReducers } from "redux";
import {getCourse} from "./reducers";


export const rootReducer = combineReducers({
    getCourse: getCourse,
})
