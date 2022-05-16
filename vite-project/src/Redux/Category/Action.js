// export const ADD_DATA = "ADD_DATA";
// export const addData = (data) => { 
//     return {type:ADD_DATA,payload:data}
// } 
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE"
export const getProductsLoading = () => ({ type: GET_PRODUCTS_LOADING })
export const getProductsSuccess = (payload)=>({type:GET_PRODUCTS_SUCCESS,payload})
export const getProductsFailure = ()=>({type:GET_PRODUCTS_FAILURE})