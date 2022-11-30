import { onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from 'firebase/database';
import addTask from './taskInputHelper';
import { taskInputBtn, taskListContainer } from './utils/dom-shortcut';
import taskItemTemplate from './views/viewTemplate';

const dbHelper = (firebaseApp, auth) => {
  const db = getDatabase(firebaseApp, 'https://time-roster-default-rtdb.asia-southeast1.firebasedatabase.app/');

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      // Get Database Reference
      const dbRef = ref(db, `user/${user.uid}/tasks`);

      // Get Form Input and Push it into DB
      taskInputBtn.addEventListener('click', (e) => {
        e.preventDefault();
        set(push(dbRef), addTask());
      });

      // Get Data from DB and show it in HTML
      onValue(dbRef, (snapshot) => {
        taskListContainer.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
          const taskData = childSnapshot.val();
          taskListContainer.append(taskItemTemplate(taskData));
          // TODO: Get Data ID from DB and delete it
          // const openTaskButton = document.querySelector(`[id="${taskData.id}"] #open_task`);
          // openTaskButton.addEventListener('click', (e) => {
          //   e.stopPropagation();
          //   console.log(`${taskData.id} deleted`);
          //   remove(ref(db, `user/${user.uid}/tasks/-NI1UW3EMYiwikcPCuCI`));
          // });
        });
      });
    } else {
      console.log('cant input, no user logged in');
    }
  });
};

export default dbHelper;
