// import { ADD_HOMEDATA } from "./Action";
// const initState = {
//     mainData: []
// }
// export const HomeReducer = (store = initState, { type, payload }) => {
//     console.log("HomePayload",payload);
//     console.log("HomeStore",store);
//     // const {basicDetails,generalData, laptopsData, mobilesData, televisionsData } = payload;
//     switch (type) {
//         case ADD_HOMEDATA:
//             return ({ ...store, mainData:[payload]});
//         default:
//             return store;
//     }
// }
import { GET_DATA_LOADING, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "./Action";
const initState = {
    loading: false,
    data: [],
    error:false
}
export const HomeReducer = (store = initState, { type,payload}) => { 
    switch (type) { 
        case GET_DATA_LOADING:
            return {
                ...store,
                loading: true,
            }
        case GET_DATA_SUCCESS:
            return {
                ...store,
                loading: false,
                data: [payload],
                error:false
            }
        case GET_DATA_FAILURE:
            return { 
                ...store,
              loading: false,
              error:true                   
            }
        default:
            return store
    }
}