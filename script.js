const toDoForm = document.getElementById('toDo-form');
const toDoInput = document.getElementById('toDo-input');
const doneButton = document.getElementsByClassName('done-toDo');
const toDoList = document.getElementById('listToDo');
const inputEdit = document.getElementById('editInput');
const editForm = document.getElementById('editForm');



const saveToDo = (text) => {    
    const toDo = document.createElement("div");
    toDo.classList.add("task");

    const taskTitle = document.createElement("p");
    taskTitle.innerText = text;
    toDo.appendChild(taskTitle);

    const buttons = document.createElement("div")
    buttons.classList.add('buttons')
    toDo.appendChild(buttons);
    
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-toDo');
    btnDelete.innerText = "✖"
    buttons.appendChild(btnDelete)

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-toDo');
    btnEdit.innerText = "✎";
    buttons.appendChild(btnEdit);

    const btnDone = document.createElement('button');
    btnDone.classList.add('done-toDo');
    btnDone.innerText = "✓";
    buttons.appendChild(btnDone);


    btnDelete.addEventListener('click', () => deleteTask(btnDelete));
    btnEdit.addEventListener('click', () => editTask(btnEdit));
    btnDone.addEventListener('click', () => taskDone(btnDone));  // adc event listener ao button


    toDoList.appendChild(toDo);
}

function deleteTask(button) {
    const task = button.closest('.task');
    task.remove();
}

function hideWidown(){
    editForm.classList.toggle('hide');
}

function editTask(button){
    
    hideWidown();    
    inputEdit.innerText = oldTask;
   
}



function taskDone(button) {
    const task = button.closest('.task'); // encontra o elemento pai mais próximo com a classe 'task'
    task.classList.toggle('done');
}

toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = toDoInput.value; //toDoInput é o espaço para escrever, inputValue é o que foi escrito

    if (inputValue) {
        saveToDo(inputValue); //criar essa função, q vai criar nova task
    }
})


editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = inputEdit.value;
 

    if (newTask) {
       
        saveToDo(newTask);
        remove(oldTask);
    }

}
)