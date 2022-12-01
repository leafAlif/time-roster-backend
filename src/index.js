import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import FIREBASECONFIG from './scripts/firebaseConfig';
import loginHelper from './scripts/loginHelper';
import './styles/main.css';
import dbHelper from './scripts/dbHelper';
import { addTaskBtn, mainElement, taskFormContainer } from './scripts/utils/dom-shortcut';

window.addEventListener('load', () => {
  // Initialize Firebase
  const firebaseApp = initializeApp(FIREBASECONFIG);
  // TODO: Separate and fix it.

  // ===== Login System =====
  const auth = getAuth(firebaseApp);
  loginHelper(auth);

  // ===== Realtime DB System =====
  dbHelper(firebaseApp, auth);

  // ===== Add Task Pop-up =====
  mainElement.addEventListener('click', (e) => {
    taskFormContainer.classList.add('hidden');
    e.stopPropagation();
  });

  addTaskBtn.addEventListener('click', (e) => {
    taskFormContainer.classList.remove('hidden');
    e.stopPropagation();
  });
});
