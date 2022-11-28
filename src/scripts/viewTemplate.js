const taskItemTemplate = (task) => /* html */ `
<div id= "${task.taskId}" class="task-data">
    <p>${task.taskName}</p>
    <p>${task.taskUrgency}</p>
    <p>${task.taskImportance}</p>
    <p>${task.taskSchedule}</p>
    <p>${task.taskDateAdded}<p>
    <button id="delete_task" type="button">Delete Task</button>
    <button id="edit_task" type="button">Edit Task</button>
  </div>
`;

export default taskItemTemplate;
