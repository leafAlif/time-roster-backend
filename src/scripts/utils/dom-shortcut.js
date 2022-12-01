const mainElement = document.querySelector('main');

// Input Form DOM
const taskFormContainer = document.getElementById('task_form_container');
const taskName = document.getElementById('task_name');
const taskUrgency = document.getElementById('task_urgency');
const taskImportance = document.getElementById('task_importance');
const taskDetail = document.getElementById('task_detail');
const taskSchedule = document.getElementById('task_schedule');

// TODO: Separate This
const taskInputBtn = document.getElementById('input_task');
const taskUpdateBtn = document.getElementById('update_task');
const taskDeleteBtn = document.getElementById('delete_task');

// Login DOM
const loginStatus = document.getElementById('login_status');
const loginButton = document.getElementById('login_button');
const logoutButton = document.getElementById('logout_button');

// Task Container DOM
const taskListContainer = document.getElementById('task_container');

// Add Task Button DOM
const addTaskBtn = document.getElementById('add_task');

export {
  mainElement,
  taskFormContainer,
  taskName,
  taskUrgency,
  taskImportance,
  taskDetail,
  taskSchedule,
  taskInputBtn,
  taskUpdateBtn,
  taskDeleteBtn,
  loginStatus,
  loginButton,
  logoutButton,
  taskListContainer,
  addTaskBtn,
};
