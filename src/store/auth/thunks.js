import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
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

    // Register user with google
    const result = await singInWithGoogle();

    // dispatch logout if result is not ok
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    // Set checking credentials status to true
    dispatch(checkingCredentials());

    // Register user with email and password
    const { errorMessage, ok, photoURL, uid } = await registerUserWithEmailPassword({ email, password, displayName });

    // dispatch logout if result is not ok
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ displayName, email, photoURL, uid }));
  };
};
