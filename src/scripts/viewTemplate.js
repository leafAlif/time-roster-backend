const taskItemTemplate = (task) => /* html */ `
<div>
    <p>${task}</p>
    <p>${task.taskUrgency}</p>
    <p>${task.taskImportance}</p>
    <p>${task.taskSchedule}</p>
  </div>
`;

export default taskItemTemplate;
