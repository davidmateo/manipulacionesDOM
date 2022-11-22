//los data attributes se consultan con "[]"

const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');


console.log(btn);


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    const value = input.value;
    //vacia el input
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText= value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    const content = 
    `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.appendChild(taskContent);
    //task.innerHTML = content;
    //a list se le agrega un hijo que se  llama task
    list.appendChild(task);
    console.log(content);
}


//capturar el click en el btn
//tipo listener
btn.addEventListener("click", createTask);
const checkComplete  = () =>{
    const i = document.createElement("i");
    i.classList.add('far','icon','fa-check-square');
    i.addEventListener('click', completeTask);
    return i ;
};

const completeTask = (event) => {
    const element  = event.target;
    //toggle lo que hace es lo siguiente
    //si existe la clase que colocamos la quita y si no la coloca
    element.classList.toggle('fas', 'completeIcon');
    element.classList.toggle('far');
};