import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, onValue, ref, set, push, child,
} from 'firebase/database';
import FIREBASECONFIG from './scripts/firebaseConfig';
import loginHelper from './scripts/loginHelper';
import addTask from './scripts/taskInputHelper';
import taskItemTemplate from './scripts/viewTemplate';
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
    // Get Database Reference
    const dbRef = ref(db, `user/${user.uid}/tasks`);

    // Get Form Input and Push it into DB
    const inputButton = document.querySelector('#input_task');
    inputButton.onclick = () => {
      const newTaskRef = push(dbRef);
      set(newTaskRef, addTask());
    };

    const dataContainer = document.querySelector('.task-table');

    onValue(dbRef, (snapshot) => {
      dataContainer.innerHTML = '';
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        dataContainer.innerHTML += taskItemTemplate(childData);
      });
    });
  } else {
    console.log('cant input, no user logged in');
  }
});
