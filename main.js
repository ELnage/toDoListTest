let text = document.querySelector("#text");
let add = document.querySelector("#add");
let tasks = document.querySelector(".tasks");
tasks.innerHTML = localStorage.getItem("tasks");
add.onclick = function () {
  if (text.value !== "") {
    let task = document.createElement("div");
    task.className = "task";
    task.textContent = text.value;
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("remove");
    task.append(remove);
    tasks.append(task);
    localStorage.setItem("tasks", tasks.innerHTML);
    text.value = ""
  }
};
  document.addEventListener("click" , function (e) {
    if(e.target.classList.contains("remove")) {
      e.target.parentElement.remove();
    localStorage.setItem("tasks", tasks.innerHTML);
    }
  })
