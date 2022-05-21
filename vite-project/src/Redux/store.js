import { createStore } from "redux"
import { HomeReducer } from "./Home/Reducer"
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./Category/Reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    products:productsReducer,
    home:HomeReducer
})
export const store = createStore(rootReducer,composeWithDevTools());