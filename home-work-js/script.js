
let taskList = [];

const addTask = (name)=> {
    if (!name) {
        console.log("Название задачи не может быть пустым.");
        return;
    }
    const task = {
        name: name,
        completed: false
    };
    taskList.push(task);
    console.log(`Задача "${name}" добавлена.`);
}

// Функция для пометки задачи как выполненной
const completeTask = (name) => {
    const task = taskList.find(task => task.name === name);
    if (task) {
        task.completed = true;
        console.log(`Задача "${name}" выполнена.`);
    } else {
        console.log(`Задача "${name}" не найдена.`);
    }
}

// Функция для удаления задачи
const deleteTask = (name) => {
    const index = taskList.findIndex(task => task.name === name);
    if (index !== -1) {
        taskList.splice(index, 1);
        console.log(`Задача "${name}" удалена.`);
    } else {
        console.log(`Задача "${name}" не найдена.`);
    }
}

// Функция для отображения всех задач
const displayTasks = () => {
    if (taskList.length === 0) {
        console.log("Список задач пуст.");
        return;
    }
    taskList.forEach(task => {
        const status = task.completed ? "Выполнена" : "Не выполнена";
        console.log(`Задача: "${task.name}", Статус: ${status}`);
    });
}




addTask("Купить продукты");
addTask("Сделать домашнее задание");
displayTasks();
completeTask("Купить продукты");
displayTasks();
deleteTask("Сделать домашнее задание");
displayTasks();