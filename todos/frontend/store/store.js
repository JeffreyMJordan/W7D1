import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';



export const configureStore = (state = {}) => createStore(
    rootReducer,
    state,
    applyMiddleware(logger)
  );


export default configureStore;
