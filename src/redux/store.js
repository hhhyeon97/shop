import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducer/productReducer';

let store = createStore(productReducer, applyMiddleware);

export default store;
