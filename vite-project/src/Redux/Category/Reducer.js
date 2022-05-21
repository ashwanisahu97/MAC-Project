// import { ADD_DATA } from "./Action";
// export const CategoryReducer = (store = {}, { type, payload }) => {
//     console.log("payload",payload);
//     switch (type) {
//         case ADD_DATA:
//             return {...store, ...payload};
//         default:
//             return store;
//     }
// }

import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from "./Action";
const initState = {
    loading: false,
    error: false,
    products:[]
}
export const productsReducer = (store = initState, { type, payload }) => {
    console.log("payload",payload)
    console.log("store",store)
    switch (type) {
        case GET_PRODUCTS_LOADING:
            return { ...store, loading: true }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...store,
                loading: false,
                error:false,
                products: [payload]
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            }
        default:
            return store
    }
 }