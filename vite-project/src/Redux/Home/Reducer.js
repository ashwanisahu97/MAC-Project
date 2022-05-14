import { ADD_HOMEDATA } from "./Action";
const initState = {
    mainData: {}
}
export const HomeReducer = (store = initState, { type, payload }) => { 
    console.log(payload);
    // const {basicDetails,generalData, laptopsData, mobilesData, televisionsData } = payload;
    switch (type) { 
        case ADD_HOMEDATA:
            return ({ ...store, mainData:payload});
        default:
            return store;
    }
}