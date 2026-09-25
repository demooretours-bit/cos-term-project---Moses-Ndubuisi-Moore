document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Pre-loaded initial tasks
  let tasks = [
    { id: 1, text: 'Submit COS 106 Term Project - Moses Moore', completed: false },
    { id: 2, text: 'Study HTML5 & CSS Responsive Layouts', completed: true }
  ];

  // Render tasks dynamically to the DOM
  function renderTasks() {
    taskList.innerHTML = ''; // Clear current display

    if (tasks.length === 0) {
      taskList.innerHTML = '<li style="padding: 1rem; color: #64748b; text-align: center;">No tasks found. Add a new task above!</li>';
      return;
    }

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''}`;
      
      // Container for Checkbox + Task Text
      const contentDiv = document.createElement('div');
      contentDiv.className = 'task-content';

      // 1. Checkbox Element
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => toggleTask(task.id));

      // 2. Task Text Label Element
      const span = document.createElement('span');
      span.textContent = task.text;
      span.className = 'task-text';

      contentDiv.appendChild(checkbox);
      contentDiv.appendChild(span);

      // 3. Delete Button Element
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'btn btn-danger';
      deleteBtn.addEventListener('click', () => deleteTask(task.id));

      li.appendChild(contentDiv);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  // Add Task Function
  function addTask() {
    const text = taskInput.value.trim();
    if (text === '') {
      alert('Please enter a task before clicking Add Task!');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
  }

  // Toggle Task Completion
  function toggleTask(id) {
    tasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
  }

  // Delete Task Function
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
  }

  // Event Listeners
  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  // Initial Render
  renderTasks();
});