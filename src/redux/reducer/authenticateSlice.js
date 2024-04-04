// let initialState = {
//   id: '',
//   pw: '',
//   authenticate: false,
// };

// function authenticateReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'LOGIN_SUCCESS':
//       //console.log('login success reducer!');
//       return { ...state, id: payload.id, pw: payload.pw, authenticate: true };
//     case 'LOGOUT_SUCCESS':
//       //console.log('logout success reducer!');
//       return { ...state, authenticate: false };
//     default:
//       return { ...state };
//   }
// }

// export default authenticateReducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  pw: '',
  authenticate: false,
};

export const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { id, pw } = action.payload;
      state.id = id;
      state.pw = pw;
      state.authenticate = true;
    },
    logoutSuccess: (state) => {
      state.id = '';
      state.pw = '';
      state.authenticate = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authenticateSlice.actions;

export default authenticateSlice.reducer;
