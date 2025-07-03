document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const filters = document.querySelectorAll(".filters button");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Initialize tasks
  const loadTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task) =>
      createTask(task.text, task.completed, task.priority)
    );
    applyFilter(
      document.querySelector(".filters .active")?.dataset.filter || "all"
    );
  };

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const createTask = (text, completed = false, priority = false) => {
    const li = document.createElement("li");
    li.className = completed ? "completed" : "";
    li.innerHTML = `
        <span class="${priority ? "high-priority" : ""}">${text}</span>
        <div>
          <button class="complete">✔</button>
          <button class="delete">✖</button>
        </div>
      `;
    taskList.appendChild(li);

    // GSAP animation
    gsap.fromTo(
      li,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  // Add new task
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text, completed: false, priority: false });
    createTask(text);
    taskInput.value = "";
    saveTasks();
  });

  // Task actions (Complete/Delete)
  taskList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const index = Array.from(taskList.children).indexOf(li);
    if (e.target.classList.contains("complete")) {
      li.classList.toggle("completed");
      tasks[index].completed = !tasks[index].completed;
    } else if (e.target.classList.contains("delete")) {
      tasks.splice(index, 1);
      gsap.to(li, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: () => li.remove(),
      });
    }
    saveTasks();
  });

  // Filters
  filters.forEach((btn) =>
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    })
  );

  const applyFilter = (filter) => {
    Array.from(taskList.children).forEach((li, index) => {
      const show =
        filter === "all" ||
        (filter === "completed" && tasks[index].completed) ||
        (filter === "pending" && !tasks[index].completed);
      li.style.display = show ? "flex" : "none";
    });
  };

  loadTasks();
});
