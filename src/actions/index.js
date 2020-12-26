import axios from 'axios';
import {
    GET_COMPANIES_FETCH,
    GET_COMPANIES_ERROR,
    GET_COMPANIES_LOAD
} from './types';

export const getCompanies = () => async (dispatch) => {
    try {
        dispatch({ type: GET_COMPANIES_LOAD, payload: true });

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        if(res) {
            // console.log(res.data);
            dispatch({ type: GET_COMPANIES_FETCH, payload: res.data });
            dispatch({ type: GET_COMPANIES_LOAD, payload: false });
            return Promise.resolve(res.data);
        }
    } catch(err) {
        // console.log(err);
        dispatch({ type: GET_COMPANIES_ERROR, payload: err.message });
        dispatch({ type: GET_COMPANIES_LOAD, payload: false });
        return Promise.reject(err);
    }
}
