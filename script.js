// script.js
document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remover</button>`;
    
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Digite uma tarefa.');
  }
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
