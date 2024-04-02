let initialState = {
  id: '',
  pw: '',
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      console.log('login success reducer!');
      return { ...state, id: payload.id, pw: payload.pw, authenticate: true };
    case 'LOGOUT_SUCCESS':
      console.log('logout success reducer!');
      return { ...state, authenticate: false };
    default:
      return { ...state };
  }
}

export default authenticateReducer;
