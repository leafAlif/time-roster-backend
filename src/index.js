import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase, onValue, ref, set, push, orderByChild, equalTo, remove, child, get,
} from 'firebase/database';
import FIREBASECONFIG from './scripts/firebaseConfig';
import loginHelper from './scripts/loginHelper';
import addTask from './scripts/taskInputHelper';
import taskItemTemplate from './scripts/viewTemplate';
import './styles/main.css';

// Initialize Firebase
const firebaseApp = initializeApp(FIREBASECONFIG);
// TODO: Separate and fix it.

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

    // Get Data from DB and show it in HTML
    const dataContainer = document.querySelector('.task-table');
    onValue(dbRef, (snapshot) => {
      dataContainer.innerHTML = '';
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        dataContainer.innerHTML += taskItemTemplate(childData);
        const deleteButton = document.querySelector('#delete_task');
        deleteButton.onclick = () => {
          console.log('delete button test');
        };
      });
    });

    // Get Data ID from DB and delete it
    const taskRef = child(dbRef, 'taskId');
    console.log(taskRef);
  } else {
    console.log('cant input, no user logged in');
  }
});
