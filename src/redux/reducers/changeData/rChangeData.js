import _ from 'lodash';
import {
  DATA_REQUEST,
  FAVORITES,
  CREATE_POST,
  DELETE_POST
} from '../../actions/types';
import blogData from '../../../data/data.json';

const INITIAL_STATE = {
  data: [],
  favorites: false,
  id: 0
};

const updateFavorites = (state, data, id, favorites) => {
  const newData = [...data];
  const sorted = _.sortBy(newData, e => !e.isFavorite);
  if (favorites) {
    sorted[id].isFavorite = false;
  } else {
    sorted[id].isFavorite = true;
  }

  return {
    ...state,
    data: sorted
  };
};

const createPost = (
  state,
  oldData,
  title,
  description,
  author,
  isFavorites,
  date
) => {
  const oldDataLength = oldData.length;
  const newData = {
    id: oldDataLength,
    created: date,
    title,
    text: description,
    author,
    isFavorite: isFavorites
  };
  const newArray = [...oldData, newData];

  return {
    ...state,
    data: newArray
  };
};

const deletePost = (state, data, id) => {
  const newData = [...data];
  const sorted = _.sortBy(newData, e => !e.isFavorite);
  const sortedFinal = sorted.filter((post, index) => {
    return index !== id;
  });
  return {
    ...state,
    data: sortedFinal
  };
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        data: blogData
      };
    case FAVORITES: {
      return updateFavorites(
        state,
        action.payload,
        action.favorites,
        action.id
      );
    }
    case DELETE_POST: {
      return deletePost(state, action.payload, action.id);
    }
    case CREATE_POST: {
      return createPost(
        state,
        action.oldData,
        action.title,
        action.description,
        action.author,
        action.isFavorites,
        action.date
      );
    }
    default:
      return state;
  }
}
