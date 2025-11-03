const btn = document.getElementById("addBtn");
const input = document.getElementById("inputBox");
const list = document.getElementById("ul");

function addTask() {
    const taskText = input.value.trim();
    if (!taskText) {
        alert("Please enter the task");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("task-checkbox");
    checkBox.addEventListener("change", () => {
        li.classList.toggle("completed");
        updateCounter();
    });

    const span = document.createElement("span");
    span.innerText = taskText;
    span.classList.add("task-text");

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task", span.innerText);
        if (newText && newText.trim() !== "") {
            span.innerText = newText.trim();
        }
    });

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", () => {
        li.remove();
        updateCounter();
    });

    li.append(checkBox, span, editBtn, delBtn);
    list.appendChild(li);

    input.value = "";
    updateCounter();
}

btn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function updateCounter() {
    const completed = list.querySelectorAll("li.completed").length;
    const total = list.querySelectorAll("li").length;
    const unCompletedTask = total - completed;

    document.getElementById("completed").innerText = "Completed Task : " + completed;
    document.getElementById("uncompleted").innerText = "Uncompleted Task : " + unCompletedTask;
}
