import {
    DATA_REQUEST
} from '../types';


export const loadData = () => {
    return (dispatch) => {
        dispatch({
            type: DATA_REQUEST
        });
    };
};
