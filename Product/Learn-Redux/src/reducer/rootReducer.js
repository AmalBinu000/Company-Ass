import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    count : counterReducer,
    todo : todoReducer
})

export default rootReducer;