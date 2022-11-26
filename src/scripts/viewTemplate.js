const taskItemTemplate = (task) => /* html */ `
<div class="task-data">
    <p>${task.taskName}</p>
    <p>${task.taskUrgency}</p>
    <p>${task.taskImportance}</p>
    <p>${task.taskSchedule}</p>
  </div>
`;

export default taskItemTemplate;
