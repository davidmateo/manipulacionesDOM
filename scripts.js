import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
//los data attributes se consultan con "[]"
//inmediately invoked function expression iife
//inmediately se usa para que el usuario no tenga acceso al codigo
//estas funciones que en cuanto se declaran se ejecutan
// lo cual se hace asi ( () =>{ })()

const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    //vacia el input
    input.value = '';
    //backticks

    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText= value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    //task.innerHTML = content;
    //a list se le agrega un hijo que se  llama task
    list.appendChild(task);
};

//capturar el click en el btn
//tipo listener
btn.addEventListener("click", createTask);
