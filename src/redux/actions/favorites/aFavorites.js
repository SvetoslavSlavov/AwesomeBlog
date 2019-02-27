import {
    FAVORITES
} from '../types';


export const addToFavorites = (data, id, favorites) => {
    return (dispatch) => {
        dispatch({
            type: FAVORITES,
            payload: data,
            id,
            favorites
        });
    };
};
