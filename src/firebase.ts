import { initializeApp } from 'firebase/app';
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
const auth = getAuth(app);
const db = getFirestore(app);

export const logIn = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

export const register = async (
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
