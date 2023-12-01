import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
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
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message
    };
  }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    console.log({ uid, photoURL });
    // TODO: update displayName in firebase

    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};
