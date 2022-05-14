import { ADD_DATA } from "./Action";
export const CategoryReducer = (store = {}, { type, payload }) => { 
    console.log("payload",payload);
    switch (type) {
        case ADD_DATA:
            return {...store, ...payload};
        default:
            return store;
    }
}