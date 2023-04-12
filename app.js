// Selectors
const taskInput = document.querySelector(".task-input");
const taskBtn = document.querySelector(".task-btn");
const taskList = document.querySelector(".task-list");

// Event Listeners
taskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteOrEditTask);

// Functions for Adding Things
function addTask(event) {
  //Prevents the taskList from disapearing
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
  //Edit Button
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-pen-to-square"></i>';
  editButton.classList.add("edit-btn");
  taskContainer.appendChild(editButton);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  taskContainer.appendChild(deleteButton);
  // Append to List
  taskList.appendChild(taskContainer);
  // Clear Task input after committing the task
  taskInput.value = "";
}

// Function for deleting and editing the list-item (the whole task)
function deleteOrEditTask(event) {
  const item = event.target;
  //Deleting
  if (item.classList[0] === "delete-btn") {
    const task = item.parentElement;
    task.remove();
    //Editing: When the user clicks the edit button, the taskItem element becomes editable
  } else if (item.classList[0] === "edit-btn") {
    const taskItem = item.parentElement.querySelector(".task-item");
    const currentTask = taskItem.innerText;
    taskItem.contentEditable = true;
    //Focus allows to type in the new task text.
    taskItem.focus();
    //The keypress event listener captures the Enter keypress and stops editing the task text.
    taskItem.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        taskItem.contentEditable = false;
      }
    });
    //The blur event listener captures the moment when the input field loses focus (when the user clicks elsewhere on the page), and updates the task text if it has changed, and stops editing the task text.
    taskItem.addEventListener("blur", function (e) {
      const newTask = taskItem.innerText.trim();
      if (newTask !== currentTask) {
        taskItem.innerText = newTask;
      }
      taskItem.contentEditable = false;
    });
  }
  if (item.classList[0] === "check-btn") {
    const task = item.parentElement;
    task.classList.toggle("checked");
  }
}
// Check Mark Function
