import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB7txup0dKbu3llQtp0XzUdKUJEToEKx2A',
  authDomain: 'homenest-a10.firebaseapp.com',
  projectId: 'homenest-a10',
  storageBucket: 'homenest-a10.firebasestorage.app',
  messagingSenderId: '233529017869',
  appId: '1:233529017869:web:cb6f3c377d70ca0f707744',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
