import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer.js';

const middlewares = [logger];

export const configureStore = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(configureStore)
 