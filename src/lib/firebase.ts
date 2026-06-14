import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Reemplaza estos valores con los de tu proyecto Firebase:
// Consola Firebase → Configuración del proyecto → Tus apps → SDK web
const firebaseConfig = {
  apiKey: 'AIzaSyAI2TY-Xw1nKK0jZONxqEQJp8v4HtOFEP4',
  authDomain: 'glow-and-harmony.firebaseapp.com',
  projectId: 'glow-and-harmony',
  storageBucket: 'glow-and-harmony.firebasestorage.app',
  messagingSenderId: '113375413010',
  appId: '1:113375413010:web:8bb2651de508a2f80ae9cb',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
