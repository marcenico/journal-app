import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo5xQVz34mDFxg7BJ5s2Cwd5LR5ZHxiaY',
  authDomain: 'react-cursos-30b68.firebaseapp.com',
  projectId: 'react-cursos-30b68',
  storageBucket: 'react-cursos-30b68.appspot.com',
  messagingSenderId: '790657633197',
  appId: '1:790657633197:web:c3e969f96e7e7432586f24'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
