import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, onValue, ref, set,
} from 'firebase/database';
import FIREBASECONFIG from './scripts/firebaseConfig';
import loginHelper from './scripts/loginHelper';
import addTask from './scripts/taskInputHelper';
import './styles/main.css';

// Initialize Firebase
const firebaseApp = initializeApp(FIREBASECONFIG);

// ===== Login System =====
const auth = getAuth(firebaseApp);
loginHelper(auth);

// ===== Realtime DB System =====
const db = getDatabase(firebaseApp, 'https://time-roster-default-rtdb.asia-southeast1.firebasedatabase.app/');
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    const dbRef = ref(db, `user/${user.uid}`);
    const inputButton = document.querySelector('#input_task');
    inputButton.onclick = () => {
      set(dbRef, addTask());
    };

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  } else {
    console.log('cant input, no user logged in');
  }
});
