import {
    DELETE_POST
} from '../types';


export const deletePost = (data, id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_POST,
            payload: data,
            id
        });
    };
};
