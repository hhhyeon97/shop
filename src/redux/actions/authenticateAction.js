function login(id, pw) {
  return (dispatch, getState) => {
    console.log('login success action');
    dispatch({ type: 'LOGIN_SUCCESS', payload: { id, pw } });
  };
}

function logout() {
  return (dispatch, getState) => {
    console.log('logout success action');
    dispatch({ type: 'LOGOUT_SUCCESS' });
  };
}

export const authenticateAction = { login, logout };
