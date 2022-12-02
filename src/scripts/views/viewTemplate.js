import { remove, ref, update } from 'firebase/database';
import addTask from '../taskInputHelper';
import {
  taskDeleteBtn,
  taskDetail,
  taskFormContainer,
  taskImportance,
  taskName,
  taskSchedule,
  taskUpdateBtn,
  taskUrgency,
} from '../utils/dom-shortcut';

const removeTask = (db, uid, taskKey) => {
  remove(ref(db, `user/${uid}/tasks/${taskKey}`))
    .then(() => {
      console.log('data removed');
    })
    .catch((error) => {
      console.log(`remove failed: ${error}`);
    });
};

const updateTask = (db, uid, taskKey) => {
  update(ref(db, `user/${uid}/tasks/${taskKey}`), addTask());
  console.log('task updated');
};

// TODO: Implement Add Task Popup
const openTask = (task, taskKey, db, uid) => {
  taskName.value = task.name;
  taskUrgency.checked = task.urgency;
  taskImportance.checked = task.importance;
  taskDetail.value = task.detail;
  taskSchedule.value = task.schedule;

  // Temporary. Separate once everything works
  taskDeleteBtn.addEventListener('click', (e) => {
    removeTask(db, uid, taskKey);
    e.stopPropagation();
  });

  taskUpdateBtn.addEventListener('click', (e) => {
    console.log(db, uid, taskKey);
    updateTask(db, uid, taskKey);
    e.stopPropagation();
  });
};

const taskItemTemplate = (task, taskKey, db, uid) => {
  const listContainer = document.createElement('li');
  listContainer.classList.add('task-data');
  listContainer.innerHTML = /* html */ `
    <p>${task.name}</p>
    <p>${task.urgency}</p>
    <p>${task.importance}</p>
    <p>${task.schedule}</p>
    <p>${task.dateAdded}<p>
  `;

  listContainer.addEventListener('click', (e) => {
    console.log(`${task.name} key is ${taskKey}`);
    taskFormContainer.classList.remove('hidden');
    openTask(task, taskKey, db, uid);
    e.stopPropagation();
  });

  return listContainer;
};

export default taskItemTemplate;
