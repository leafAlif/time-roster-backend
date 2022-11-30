const taskItemTemplate = (task) => {
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
    console.log(`${task.id}`);
  });

  return listContainer;
};

export default taskItemTemplate;
