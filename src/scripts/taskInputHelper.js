const addTask = () => {
  const taskId = new Date().toISOString();
  const taskName = document.querySelector('task_name').value;
  const taskUrgency = document.querySelector('task_urgency').value;
  const taskImportance = document.querySelector('task-importance').value;
  const taskSchedule = document.querySelector('task-schedule').value;
  const taskDateAdded = new Date();

  const taskObject = {
    taskId,
    taskName,
    taskUrgency,
    taskImportance,
    taskSchedule,
    taskDateAdded,
  };

  return taskObject;
};

export default addTask;
