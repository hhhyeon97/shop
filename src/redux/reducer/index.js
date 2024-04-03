// 리듀서 여러개일 때 합치기
// combineReducers(reducers) 사용

import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productReducer from './productSlice';

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
