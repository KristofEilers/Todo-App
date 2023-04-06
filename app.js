// Selectors
const taskInput = document.querySelector(".task-input");
const taskBtn = document.querySelector(".task-btn");
const taskList = document.querySelector(".task-list");

// Event Listeners
taskBtn.addEventListener("click", addTask);

// Functions
function addTask(event) {
  event.preventDefault();
  //Task-List
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task");
  //Check Mark Button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("check-btn");
  taskContainer.appendChild(checkButton);
  // Li
  const newTask = document.createElement("li");
  newTask.classList.add("task-item");
  newTask.innerText = taskInput.value;
  taskContainer.appendChild(newTask);
  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  taskContainer.appendChild(deleteButton);
  // Append to List
  taskList.appendChild(taskContainer);
  //Clear Task input after commiting the task
  taskInput.value = "";
}
