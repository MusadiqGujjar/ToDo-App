const addBtn = document.getElementById("addBtn");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");
    const clearAll = document.getElementById("clearAll");

    // Add task function
    function addTask() {
      const taskText = todoInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const taskDiv = document.createElement("div");
      taskDiv.className = "task";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", () => {
        taskDiv.classList.toggle("done", checkbox.checked);
      });

      const span = document.createElement("span");
      span.textContent = taskText;

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(span);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "🗑️";
      deleteBtn.className = "deleteBtn";
      deleteBtn.addEventListener("click", () => li.remove());

      li.appendChild(taskDiv);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);

      todoInput.value = "";
    }

    // Event listeners
    addBtn.addEventListener("click", addTask);
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });

    clearAll.addEventListener("click", () => {
      todoList.innerHTML = "";
    });