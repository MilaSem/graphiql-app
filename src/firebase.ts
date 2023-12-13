import { FirebaseError, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxhoaw6KQD-ja9UynQCE0HQArvE_OmeTc',
  authDomain: 'zen-graphiql-app.firebaseapp.com',
  projectId: 'zen-graphiql-app',
  storageBucket: 'zen-graphiql-app.appspot.com',
  messagingSenderId: '827385530326',
  appId: '1:827385530326:web:3ceb79c314fee55bf68677',
  measurementId: 'G-D8VC2XLRW7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logIn = async (email: string, password: string): Promise<void> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem('uid', res.user.uid);
  } catch (err) {
    if (err instanceof FirebaseError) localStorage.setItem('error', err.code);
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};
