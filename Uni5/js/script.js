//La tarea a realizar consiste en la generación de toda la lógica y código JS 
//para que la App responda correctamente

//Variables
let newTask = document.getElementById("new-task");
let btnAddTask = document.getElementById("add-button");
let incompleteTaskUl = document.getElementById("incomplete-tasks");
let completeTaskUl = document.getElementById("completed-tasks");
let btnsDeleteTask = document.querySelectorAll(".delete");
let btnsEditTask = document.querySelectorAll(".edit");
let arrayTasks = [];
let arrayCompletedTasks = [];

//Btn
btnAddTask.addEventListener("click", addTask);

btnsDeleteTask.forEach((btn) => {
    btn.addEventListener("click", () => deleteTask(btn.parentElement));
});

btnsEditTask.forEach((btn) => {
    btn.addEventListener("click", () => editTask(btn.parentElement));
});
//Funciones
function editTask(parent) {
    let oldTask = parent.querySelector("label");
    oldTask = oldTask.textContent;
    showInputs(parent);
    let editedTask = parent.querySelectorAll("input")[1];

    editedTask.addEventListener("focusout", function () {
    let label = parent.querySelector("label");
    label.textContent = editedTask.value;
    editedTask.classList.remove("show-input");
    editedTask.classList.add("hide-input");
    label.classList.remove("hide-label");
    let index = arrayTasks.indexOf(oldTask.trim());
    arrayTasks.splice(index, 1, editedTask.value);
    console.log(arrayTasks);
    addElementToLocal("Task", arrayTasks);
    });
}

function addElementToLocal(key, value) {
    localStorage.setItem(key, value);
}

function showInputs(parent) {
    let input = parent.querySelectorAll("input");
    let label = parent.querySelector("label");
    console.log(label);
    console.log(input[1]);
    input[1].classList.remove("hide-input");
    input[1].classList.add("show-input");
    label.classList.add("hide-label");
}

function addTask() {
    console.log(newTask.value);
    if (newTask.value.trim() != "") {
        let newLi = buildLi(newTask.value);
        incompleteTaskUl.appendChild(newLi);
        arrayTasks.push(newTask.value);
        //Esta linea es para agregar la tarea en el storage, 
        //se crea un array y se guarda en el storage
        addElementToLocal("Task", arrayTasks); 
        newTask.value = "";
    }
}

function deleteTask(parent) {
    console.log(parent.parentElement.id);
    let task = parent.querySelector("label");
    task = task.textContent;
    if (parent.parentElement.id == "incomplete-tasks") {
        incompleteTaskUl.removeChild(parent);
        arrayTasks.splice(arrayTasks.indexOf(task), 1);
        addElementToLocal("Task", arrayTasks);
    }else{
        completeTaskUl.removeChild(parent);
        arrayCompletedTasks.splice(arrayCompletedTasks.indexOf(task), 1);
        addElementToLocal("CompletedTask", arrayCompletedTasks);
    }
}

function completeTask(element) {
    console.log(element.checked);
    if (!element.checked) {
        incompleteTask(element);
    } else {
        console.log(element.parentElement);
        incompleteTaskUl.removeChild(element.parentElement);
        let btnEdit = element.parentElement.querySelector(".edit");
        btnEdit.classList.add("hide-icon");
        element.checked = true;
        completeTaskUl.appendChild(element.parentElement);
        arrayTasks.splice(arrayTasks.indexOf(element.id), 1);
        addElementToLocal("Task", arrayTasks);
        arrayCompletedTasks.push(element.id);
        addElementToLocal("CompletedTask", arrayCompletedTasks);
    }
}

function incompleteTask(element) {
    console.log(element);
    completeTaskUl.removeChild(element.parentElement);
    element.checked = false;
    let btnEdit = element.parentElement.querySelector(".edit");
    btnEdit.classList.remove("hide-icon");
    incompleteTaskUl.appendChild(element.parentElement);
    arrayCompletedTasks.splice(arrayCompletedTasks.indexOf(element.id), 1);
    addElementToLocal("CompletedTask", arrayCompletedTasks);
    arrayTasks.push(element.id);
    addElementToLocal("Task", arrayTasks);
}
//funcion para la li
function buildLi(task) {
    let li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" class="check" id=${task} onclick=completeTask(this) />
    <label>${task}</label>
    <input type="text" class="hide-input" />
    <button class="edit" onclick=editTask(parentElement)>
        <i class="fas fa-pen"></i>
    </button>
    <button class="delete" id="delete" onclick=deleteTask(parentElement)><i class="fas fa-trash-alt"></i></button>
    `;
    return li;
}

function showTasks() {
    let task = localStorage.getItem("Task");
    if (task != undefined && task.trim() != "") {
        arrayTasks = task.split(",");
        
        for (let i = 0; i < arrayTasks.length; i++) {
            let newLi = buildLi(arrayTasks[i]);
            incompleteTaskUl.appendChild(newLi);
        }
    }
    let completeTask = localStorage.getItem("CompletedTask");
    if (completeTask != undefined && completeTask.trim() != "") {
        arrayCompletedTasks = completeTask.split(",");
        for (let i = 0; i < arrayCompletedTasks.length; i++) {
            let newCompletedLi = buildLi(arrayCompletedTasks[i]);
            let btnEdit = newCompletedLi.querySelector(".edit");
            btnEdit.classList.add("hide-icon");
            completeTaskUl.appendChild(newCompletedLi);
        }
    }
}

showTasks();