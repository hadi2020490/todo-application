let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let deleteAllBtn = document.getElementById("deleteAllBtn");

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("⚠️ Please write something before adding!");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  let btnDiv = document.createElement("div");
  btnDiv.classList.add("buttons");

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.onclick = function () {
    let newTask = prompt("✏️ Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    li.remove();
  };

  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);

  taskList.appendChild(li);

  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

deleteAllBtn.addEventListener("click", function () {
  if (taskList.children.length === 0) {
    alert("There’s nothing to delete 😅");
  } else {
    if (confirm("Are you sure you want to delete all tasks?")) {
      taskList.innerHTML = "";
    }
  }
});
