import {
    CREATE_POST
} from '../types';


export const createPost = (oldData, title, description, author, isFavorites, date) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_POST,
            oldData,
            title,
            description,
            author,
            isFavorites,
            date
        });
    };
};
