import { singInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    // dispatch(login({ email, password }));
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    // Set checking credentials status to true
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();

    // dispatch logout if result is not ok
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
