const input = document.getElementById('inputField');
const add = document.getElementById('add');
const toDos= document.getElementById('toDos');
let toDoArr=[];
window.onload = () => {
    toDoArr = JSON.parse(localStorage.getItem('todos')) || [];
    console.log(toDoArr)
    toDoArr.forEach( inputVal => addTodo(inputVal) );
}
add.addEventListener('click', ()=>{
    if(input.value){
                // Adding to array
                toDoArr.push(input.value)
                localStorage.setItem('todos', JSON.stringify(toDoArr))
                let inputVal= input.value;
                addTodo(inputVal) ;
    }
        // function addTodo(inputVal){
        //     if(input.value){    
        //         let toDo = document.createElement('p');
        //         toDo.classList.add('parah');
        //         toDo.innerText=input.value;
        //         toDos.appendChild(toDo);
        
        
                
        //         // Clear input flied
        //         input.value="";
        
        //         // Adding check icon display none
        
        //         const checkIcon= document.createElement('i');
        //             checkIcon.classList.add('fa');
        //             checkIcon.classList.add('fa-check');
        //             toDo.appendChild(checkIcon);
        //             checkIcon.style.opacity="0";
        
        //         //Delete botton on todo item
        //         const deleteIcon= document.createElement('i');
        //         deleteIcon.classList.add('fa');
        //         deleteIcon.classList.add('fa-trash');
        //         toDo.appendChild(deleteIcon); 
        
        //         // Delete function
        //         deleteIcon.addEventListener('click',()=>{
        //             toDos.removeChild(toDo);
        //         })
        
        //         // Adding/Removing strike line
        //         let strike = false;
        
        //         toDo.addEventListener('click',()=>{
        
        //             if (!strike) {    
        //                 toDo.style.textDecoration="line-through";
        //                 checkIcon.style.opacity="1";
        //                 strike = true;
        //             }
        //             else{
        //                 toDo.style.textDecoration="none"
        //                 checkIcon.style.opacity="0";
        //                 strike= false;
        //             }
        //         })
        //     }
        // }
        
})

function addTodo(inputVal){
    if(inputVal){    
        let toDo = document.createElement('p');
        toDo.classList.add('parah');
        toDo.innerText=inputVal;
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
            removeTodo(inputVal);
            toDos.removeChild(toDo);
        })

        // Adding/Removing strike line
        let strike = false;

        toDo.addEventListener('click',()=>{
            
            if (!strike) {    
                toDo.style.textDecoration="line-through";
                checkIcon.style.opacity="1";
                strike = true;
            }
            else{
                toDo.style.textDecoration="none"
                checkIcon.style.opacity="0";
                strike= false;
            }
            removeTodo(inputVal);
        })
    }
}

function removeTodo(inputVal){
    let index = toDoArr.indexOf(inputVal)
    if(index>-1){
        toDoArr.splice(index,1);
        localStorage.setItem('todos', JSON.stringify(toDoArr))
    }

}