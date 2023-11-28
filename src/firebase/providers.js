import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

    console.log({ displayName, email, photoURL, uid });
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message
    };
  }
};
