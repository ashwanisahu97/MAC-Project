import { createStore } from "redux"
// import { HomeReducer } from "./Home/Reducer;
import { productsReducer } from "./Category/Reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    products:productsReducer
})
export const store = createStore(rootReducer);