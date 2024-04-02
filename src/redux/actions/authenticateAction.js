function login(id, pw) {
  return (dispatch, getState) => {
    console.log('login success action');
    dispatch({ type: 'LOGIN_SUCCESS', payload: { id, pw } });
  };
}

export const authenticateAction = { login };
