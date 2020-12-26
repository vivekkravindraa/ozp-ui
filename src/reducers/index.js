import {
    GET_COMPANIES_FETCH,
    GET_COMPANIES_ERROR,
    GET_COMPANIES_LOAD
} from '../actions/types';

const initialState = {
    companies: [],
    loading: true,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch(action.type) {
        case GET_COMPANIES_FETCH:
            return {
                ...state,
                companies: action.payload
            }
        case GET_COMPANIES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_COMPANIES_LOAD:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}
