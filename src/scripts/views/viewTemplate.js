import { remove, ref } from 'firebase/database';

const removeTask = (db, uid, taskKey) => {
  remove(ref(db, `user/${uid}/tasks/${taskKey}`))
    .then(() => {
      console.log('data removed');
    })
    .catch((error) => {
      console.log(`remove failed: ${error}`);
    });
};

// TODO: Implement Add Task Popup
const addItemPopup = (taskKey, db, uid) => {

}

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

  listContainer.addEventListener('click', () => {
    console.log(`${task.name} key is ${taskKey}`);
    removeTask(db, uid, taskKey);
  });

  return listContainer;
};

export default taskItemTemplate;
