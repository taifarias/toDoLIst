const toDoForm = document.getElementById('toDo-form');
const toDoInput = document.getElementById('toDo-input');
const doneButton = document.getElementsByClassName('done-toDo');
const toDoList = document.getElementById('listToDo');
const inputEdit = document.getElementById('editInput');
const editForm = document.getElementById('editForm');
const searchInput = document.getElementById('search-input');
const filterSelect = document.getElementById('filter-select');
const eraseButton = document.getElementById('erase-button');
const cancelEditBtn = document.getElementById('cancel-edit-btn');

let taskEdit;


const saveToDo = (text) => {    
    const toDo = document.createElement("div");
    toDo.classList.add("task");

    const taskTitle = document.createElement("p");
    taskTitle.classList.add('taskTitle')
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

    toDoInput.value = '';

    
}

function deleteTask(button) {
    const task = button.closest('.task');
    task.remove();
}
function taskDone(button) {
    const task = button.closest('.task'); // encontra o elemento pai mais próximo com a classe 'task'
    task.classList.toggle('done');
}
function hideWidown(){
    editForm.classList.toggle('hide');
}
function editTask(button) {
    hideWidown();   
    taskToEdit = button.closest('.task');
    const taskTitle = taskToEdit.querySelector('.taskTitle');     
    const oldTask = taskTitle.innerText; // Obtém o texto atual da tarefa 
    inputEdit.value = oldTask;
    taskToEdit.style.display = 'none'; // Oculta a tarefa durante a edição
}

function cancelEdit() {
    hideWidown();
    taskToEdit.style.display = 'flex'; // Mostra a tarefa novamente se a edição for cancelada
}

function filterTasks(searchText) {
    const tasks = document.querySelectorAll('.task');
    
    tasks.forEach(task => {
        const title = task.querySelector('.taskTitle').innerText.toLowerCase();
        
        // Verifica se o texto da tarefa contém o texto de pesquisa
        if (title.includes(searchText)) {
            task.style.display = 'flex'; // Mostra a tarefa
        } else {
            task.style.display = 'none'; // Oculta a tarefa
        }
    });
}

function filterTasksByStatus(status) {
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        const isDone = task.classList.contains('done');
        
        switch(status) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'done':
                task.style.display = isDone ? 'flex' : 'none';
                break;
            case 'toDo':
                task.style.display = isDone ? 'none' : 'flex';
                break;
        }
    });
}




toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = toDoInput.value; //toDoInput é o espaço para escrever, inputValue é o que foi escrito

    if (inputValue) {
        saveToDo(inputValue); //criar essa função, q vai criar nova task
        }
   }
)


editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = inputEdit.value; 

    if (newTask) {       
        saveToDo(newTask);
        hideWidown();
    }
}
)

searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase(); // Obtém o texto digitado, convertido para minúsculas
    filterTasks(searchText); // Chama a função de filtro com o texto da pesquisa
});
 
eraseButton.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do botão
    searchInput.value = ''; // Limpa o campo de pesquisa
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.style.display = 'flex'; // Exibe todas as tarefas
    });
});

filterSelect.addEventListener('change', function() {
    const filterValue = this.value;
    filterTasksByStatus(filterValue);
});
