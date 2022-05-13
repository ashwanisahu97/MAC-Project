import { ADD_DATA } from "./Action";
export const CategoryReducer = (store = {mobileData:[]}, { type, payload }) => { 
    switch (type) {
        case ADD_DATA:
            return {...store, mobileData: [payload]};
        default:
            return store;
    }
}