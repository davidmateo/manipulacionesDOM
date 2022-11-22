const deleteIcon =  () =>{
    const i = document.createElement('i');
    i.addEventListener('click', deleteTask);
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    return i;
}

const deleteTask= (event) =>{
    //target.parentElement me ayuda a capturar el elemento padre
    const parent = event.target.parentElement;
    //con remove eliminamos ese elemento padre capturado anteriormente
    parent.remove();
}
export default deleteIcon;