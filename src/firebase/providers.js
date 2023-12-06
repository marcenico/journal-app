import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid
    };
  } catch (error) {
    console.error(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    // Update profile with display name
    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid
    };
  } catch (error) {
    console.error(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid
    };
  } catch (error) {
    console.error(error);
    return { ok: false, errorMessage: error.message };
  }
};
