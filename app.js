// Get the required elements from the DOM
const addButton = document.querySelector('.button__new');
const taskInput = document.querySelector('.task-input__new');
const incompleteTasksList = document.querySelector('#incomplete-tasks-id');
const completedTasksList = document.querySelector('#completed-tasks-id');

// Add task to the incomplete tasks list
function addTask(event) {
  event.preventDefault(); // prevent form submission
  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }
  const newTask = createTaskElement(taskInput.value.trim());
  incompleteTasksList.appendChild(newTask);
  taskInput.value = '';
}

// Create a new task element
function createTaskElement(taskName) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', completeTask);

  const label = document.createElement('label');
  label.classList.add('task-label');
  label.innerText = taskName;

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('task-input-text');
  input.style.display = 'none';

  const editButton = document.createElement('button');
  editButton.classList.add('button', 'button__edit');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', editTask);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button');
  deleteButton.innerHTML = '<img class="button__image" src="./remove.svg" alt="remove button">';
  deleteButton.addEventListener('click', deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(input);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// Edit task
function editTask(event) {
  const taskItem = event.target.parentElement;
  const label = taskItem.querySelector('.task-label');
  const input = taskItem.querySelector('.task-input-text');
  if (taskItem.classList.contains('edit-mode')) {
    label.innerText = input.value;
    input.style.display = 'none';
    label.style.display = 'inline-block';
    event.target.innerText = 'Edit';
  } else {
    input.value = label.innerText;
    input.style.display = 'inline-block';
    label.style.display = 'none';
    event.target.innerText = 'Save';
  }
  taskItem.classList.toggle('edit-mode');
}
// Complete task by moving it to the completed tasks list
function completeTask(event) {
  const taskItem = event.target.parentElement;
  completedTasksList.appendChild(taskItem);
}

// Delete task from the list
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

// Edit task
function editTask(event) {
  const taskItem = event.target.parentElement;
  const label = taskItem.querySelector('.task-label');
  const input = taskItem.querySelector('.task-input-text');
  if (taskItem.classList.contains('edit-mode')) {
    label.innerText = input.value;
    input.style.display = 'none';
    label.style.display = 'inline-block';
    event.target.innerText = 'Edit';
  } else {
    input.value = label.innerText;
    input.style.display = 'inline-block';
    label.style.display = 'none';
    event.target.innerText = 'Save';
  }
  taskItem.classList.toggle('edit-mode');
}

// Set click event listener for add button
addButton.addEventListener('click', addTask);

// Set click event listener for delete button
document.querySelectorAll('.button__image').forEach(button => {
  button.addEventListener('click', deleteTask);
});

// Set change event listener for checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', completeTask);
});
