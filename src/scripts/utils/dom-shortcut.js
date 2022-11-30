// Input Form DOM
const taskName = document.getElementById('task_name');
const taskUrgency = document.getElementById('task_urgency');
const taskImportance = document.getElementById('task_importance');
const taskSchedule = document.getElementById('task_schedule');
const taskInputBtn = document.getElementById('input_task');

// Login DOM
const loginStatus = document.getElementById('login_status');
const loginButton = document.getElementById('login_button');
const logoutButton = document.getElementById('logout_button');

// Task Container DOM
const taskListContainer = document.getElementById('task_container');

export {
  taskName,
  taskUrgency,
  taskImportance,
  taskSchedule,
  taskInputBtn,
  loginStatus,
  loginButton,
  logoutButton,
  taskListContainer,
};
