document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description');
    const task = taskInput.value;

    const newTask = document.createElement('li');
    newTask.textContent = task;

    const taskList = document.getElementById('tasks');
    taskList.appendChild(newTask);

    taskInput.value = '';
  });
});
