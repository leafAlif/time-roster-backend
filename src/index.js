import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, onValue, ref, set, push,
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
    const dbTaskRef = ref(db, `user/${user.uid}/tasks`);

    const inputButton = document.querySelector('#input_task');
    inputButton.onclick = () => {
      const newTaskRef = push(dbTaskRef);
      set(newTaskRef, addTask());
    };

    onValue(dbTaskRef, (snapshot) => {
      const data = snapshot.val();
      const dataContainer = document.querySelector('.task-table');
      console.log(data);
      Object.keys(data).forEach((task) => {
        dataContainer.innerHTML += taskItemTemplate(task);
      });
    });
  } else {
    console.log('cant input, no user logged in');
  }
});
