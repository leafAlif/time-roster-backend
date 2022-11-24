import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import FIREBASECONFIG from './scripts/firebaseConfig';
import './styles/main.css';

// Initialize Firebase
const firebaseApp = initializeApp(FIREBASECONFIG);

// ===== Login System =====
const auth = getAuth(firebaseApp);
const loginProvider = new GoogleAuthProvider();

loginProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
loginProvider.setCustomParameters({
  prompt: 'select_account',
});

const loginStatus = document.querySelector('#login-status');
const loginButton = document.querySelector('#login-button');
const logoutButton = document.querySelector('#logout-button');

// loginButton.addEventListener('click', signInWithPopup(loginProvider));
loginButton.onclick = () => signInWithPopup(auth, loginProvider);
logoutButton.onclick = () => signOut(auth);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    const userName = user.displayName;
    loginStatus.innerHTML = `${userName} is logged in!`;
    loginButton.disabled = 1;
    logoutButton.disabled = 0;
  } else {
    loginStatus.innerHTML = 'User Logged Out!';
    loginButton.disabled = 0;
    logoutButton.disabled = 1;
  }
});

// ===== Realtime DB System =====
const db = getDatabase(firebaseApp, 'https://time-roster-default-rtdb.asia-southeast1.firebasedatabase.app/');
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    const dbRef = ref(db, `userTasks/${user.uid}`);
    set(dbRef, {
      taskId: new Date().toISOString(),
      taskName: `${user.displayName} Task ${Math.random()}`,
    });
  } else {
    console.log('cant input, no user logged in');
  }
});
