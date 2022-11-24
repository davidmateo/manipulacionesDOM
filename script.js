import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
//los data attributes se consultan con "[]"
//inmediately invoked function expression iife
//inmediately se usa para que el usuario no tenga acceso al codigo
//estas funciones que en cuanto se declaran se ejecutan
// lo cual se hace asi ( () =>{ })()

const btn = document.querySelector('[data-form-btn]');

//add task 
const addTask = (evento) =>{
    const list = document.querySelector("[data-list]");
    const task = createTask(evento)
    //a list se le agrega un hijo que se  llama task
    list.appendChild(task);

}

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    const value = input.value;
    const task = document.createElement("li");
    task.classList.add("card"); 
    //vacia el input
    input.value = '';
    calendar.value = null;
    //backticks

    const taskContent = document.createElement('div');
    const dateContent = document.createElement('div');
    const dateTask = document.createElement('span');
    const titleTask = document.createElement('span');
    dateTask.classList.add('task');
    titleTask.classList.add('task');
    dateTask.innerText= dateFormat;
    titleTask.innerText= value;
    taskContent.appendChild(checkComplete());
    dateContent.appendChild(dateTask);
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(dateContent);
    task.appendChild(deleteIcon());
    //task.innerHTML = content;
    return task;
};

//capturar el click en el btn
//tipo listener
btn.addEventListener("click", addTask);
