
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterButtons = document.querySelectorAll('.filter-buttons button');


    // Массив задач
    let tasks = [];

    addTaskBtn.addEventListener('click', () =>{
        const taskText = taskInput.value.trim();

        if(taskText){
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', event =>{
        const {target} = event;
        if(target.tagName === 'BUTTON'){
            const index = target.parentElement.dataset.index;
            deleteTask(index);
        }else if(target.tagName === 'SPAN'){
            toggleTaskCompleted(target.closest('li').dataset.index);
        }
        
    });

    taskList.addEventListener('dblclick', event => {
        const { target } = event;
        if (target.tagName === 'SPAN') {
            editTask(target.closest('li').dataset.index);
        }
    });


    filterButtons.forEach(button =>{
        button.addEventListener('click', () =>{
            filterTasks(button.id);
        })
    });

    function addTask(taskText){
        const task = {text: taskText, completed: false}
        tasks.push(task);
        renderTasks();
    };

    function deleteTask(index) {
        tasks.push(task);
        renderTasks();
    };

    function toggleTaskCompleted(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    function editTask(index){
        const newText = prompt('Редактировать задачу: ', tasks[index].text);
        
        if(newText !== null){
            tasks[index].text = newText.trim() || tasks[index].text;
            renderTasks();
        }
    
    };

    function renderTasks(filter = "all"){
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            if(filter === 'completed') return task.completed;
            if(filter === 'active') return !task.completed;
            return true;
        });

        filteredTasks.forEach((task, index) =>{
            const li = document.createElement('li');
            li.dataset.index = index;
            li.className = task.completed ? 'completed' : '';
        

            const span = document.createElement('span');
            span.textContent = task.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'удалить';

            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    };

    function filterTasks(filterId){
        const filter = filterId.replace('filter', '').toLowerCase();
        renderTasks(filter);
    }

});

