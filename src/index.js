import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import FIREBASECONFIG from './scripts/firebaseConfig';
import loginHelper from './scripts/loginHelper';
import './styles/main.css';
import dbHelper from './scripts/dbHelper';

window.addEventListener('load', () => {
  // Initialize Firebase
  const firebaseApp = initializeApp(FIREBASECONFIG);
  // TODO: Separate and fix it.

  // ===== Login System =====
  const auth = getAuth(firebaseApp);
  loginHelper(auth);

  // ===== Realtime DB System =====
  dbHelper(firebaseApp, auth);
});
