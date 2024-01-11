const input = document.getElementById('inputField');
const add = document.getElementById('add');
const toDos= document.getElementById('toDos');

add.addEventListener('click', ()=>{
    let toDo = document.createElement('p');
    toDo.classList.add('parah');
    toDo.innerText=input.value;
    toDos.appendChild(toDo);
    
    // Clear input flied
    input.value="";
    //Delete botton on todo item
    const deleteIcon= document.createElement('i');
    deleteIcon.classList.add('fa');
    deleteIcon.classList.add('fa-trash');
    toDo.appendChild(deleteIcon); 

    // Delete function
    deleteIcon.addEventListener('click',()=>{
    toDos.removeChild(toDo);

    })

    // Adding ToDo Check icon

    toDo.addEventListener('click',()=>{
        const checkIcon= document.createElement('i');
        checkIcon.classList.add('fa');
        checkIcon.classList.add('fa-check');
        toDo.appendChild(checkIcon);
        toDo.style.textDecoration="line-through"
    })

})