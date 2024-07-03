const toDoForm = document.getElementById('toDo-form');
const toDoInput = document.getElementById('toDo-input');

const toDoList = document.getElementById('listToDo')



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


    toDoList.appendChild(toDo);
}


toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = toDoInput.value; //toDoInput é o espaço para escrever, inputValue é o que foi escrito

    if (inputValue) {
        saveToDo(inputValue); //criar essa função, q vai criar nova task
    }
})

