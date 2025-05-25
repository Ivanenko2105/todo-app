let addBtn = document.getElementById("add-task-btn");
let taskInput = document.getElementById("task-text");
let taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let newTask = document.createElement("li");
    newTask.className = "task-item";

    let textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = taskText;
    textSpan.addEventListener("blur", () => {
      textSpan.contentEditable = "false";
    });


    let buttonContainer = document.createElement("div");
    buttonContainer.className = "delete-edit-btn-container";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.className = "simple-btn";
    deleteBtn.type = "button";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(newTask);
    });

    let editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.className = "simple-btn";
    editBtn.type = "button";
    editBtn.addEventListener("click", function() {
      textSpan.setAttribute("contenteditable", "true");
      textSpan.focus();
    });

    buttonContainer.appendChild(deleteBtn);
    buttonContainer.appendChild(editBtn);
    newTask.appendChild(textSpan);
    newTask.appendChild(buttonContainer);

    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear the input field
});