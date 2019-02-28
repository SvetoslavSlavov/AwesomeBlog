import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import { loadState, saveState } from '../../helpers/persistState/localStorage';
import rootReducers from "../reducers/rootReducer";


const persistState = loadState();
const store = createStore(rootReducers, persistState, applyMiddleware(thunk, logger));

store.subscribe(()=>{
    saveState(
      {
        data: store.getState().data
      }
    );
  });

export default store;
