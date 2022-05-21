// export const ADD_HOMEDATA = "ADD_HOMEDATA";
// export const addHomeData = (payload) => ({ type:ADD_HOMEDATA,payload:payload})

export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getDataLoading = () => ({type:GET_DATA_LOADING})
export const getDataSuccess = (payload) => ({type:GET_DATA_SUCCESS,payload})
export const getDataFailure = () => ({type:GET_DATA_FAILURE})