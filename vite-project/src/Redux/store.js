import { createStore } from "redux"
import { CategoryReducer } from "./Category/Reducer"
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    category:CategoryReducer
})
export const store = createStore(rootReducer);