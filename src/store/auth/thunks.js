import { deleteDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../firebase/config';
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle
} from '../../firebase/providers';
import { clearNotesLogout, deleteNoteById } from '../journal';
import { checkingCredentials, login, logout } from './';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
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

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    // Login with email and password
    const { errorMessage, ok, photoURL, uid, displayName } = await loginWithEmailPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ displayName, email, photoURL, uid }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout({ errorMessage: null }));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(firestoreDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id));
  };
};
