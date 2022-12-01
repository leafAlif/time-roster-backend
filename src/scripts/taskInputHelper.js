import {
  taskDetail,
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
  const detail = taskDetail.value;
  const schedule = taskSchedule.value;
  const dateAdded = new Date().toDateString();

  const taskObject = {
    id,
    name,
    urgency,
    importance,
    detail,
    schedule,
    dateAdded,
  };

  return (taskObject);
};

export default addTask;
