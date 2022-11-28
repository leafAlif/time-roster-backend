const addTask = async () => {
  const taskId = new Date().toISOString();
  const taskName = document.querySelector('#task_name').value;
  const taskUrgency = document.querySelector('#task_urgency').checked;
  const taskImportance = document.querySelector('#task_importance').checked;
  const taskSchedule = document.querySelector('#task_schedule').value;
  const taskDateAdded = new Date().toDateString();

  const taskObject = {
    taskId,
    taskName,
    taskUrgency,
    taskImportance,
    taskSchedule,
    taskDateAdded,
  };

  return (taskObject);
};

export default addTask;
