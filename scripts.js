//los data attributes se consultan con "[]"

const btn = document.querySelector('[data-form-btn]');
const input = document.querySelector('[data-form-input]');


console.log(btn);


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}


//capturar el click en el btn
//tipo listener
btn.addEventListener("click", createTask());
