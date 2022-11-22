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
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};
export default checkComplete;