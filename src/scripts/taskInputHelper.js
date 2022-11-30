import {
  taskImportance,
  taskName,
  taskSchedule,
  taskUrgency,
} from './utils/dom-shortcut';

const addTask = () => {
  const id = new Date().toISOString();
  const name = taskName.value;
  const urgency = taskUrgency.checked;
  const importance = taskImportance.checked;
  const schedule = taskSchedule.value;
  const dateAdded = new Date().toDateString();

  const taskObject = {
    id,
    name,
    urgency,
    importance,
    schedule,
    dateAdded,
  };

  return (taskObject);
};

export default addTask;
