const input = document.getElementById('inputField');
const add = document.getElementById('add');
const toDos= document.getElementById('toDos');

add.addEventListener('click', ()=>{
  if(input.value){    
        let toDo = document.createElement('p');
        toDo.classList.add('parah');
        toDo.innerText=input.value;
        toDos.appendChild(toDo);
        
        // Clear input flied
        input.value="";

        // Adding check icon display none

        const checkIcon= document.createElement('i');
            checkIcon.classList.add('fa');
            checkIcon.classList.add('fa-check');
            toDo.appendChild(checkIcon);
            checkIcon.style.opacity="0";

        //Delete botton on todo item
        const deleteIcon= document.createElement('i');
        deleteIcon.classList.add('fa');
        deleteIcon.classList.add('fa-trash');
        toDo.appendChild(deleteIcon); 

        // Delete function
        deleteIcon.addEventListener('click',()=>{
            toDos.removeChild(toDo);
        })

        // Adding/Removing strike line

        toDo.addEventListener('click',()=>{

            if ( checkIcon.style.opacity="1") {    
                toDo.style.textDecoration="none"
                checkIcon.style.opacity="0";
                console.log(1);
                }
            else{
                toDo.style.textDecoration="line-through"
                checkIcon.style.opacity="1";
                console.log(2);
            }
        })
    }

})