// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { thunk } from 'redux-thunk';
// import rootReducer from './reducer/index';

import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './reducer/authenticateSlice';
import productReducer from './reducer/productSlice';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
