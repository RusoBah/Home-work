// заголовок сохраняем в переменную
// Введённое имя сохраняем в localstorege
// Выводим его в заголовок - это событие прописываем через кнопку

document.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input');
    let addBtn = document.getElementById('addBtn');
    const display= document.getElementById('display');

    const upadateDisplay = () =>{
        const saveInput = localStorage.getItem('name');
        if(saveInput){
            display.textContent = `Здравствуй, ${saveInput}`;
        }else {
            display.textContent = 'Имя не сохранено';
        }
    };

    addBtn.addEventListener('click', () =>{
        const text = input.value.trim();
        if(text){
            localStorage.setItem('name', text);
            upadateDisplay();
            input.value = '';
        }
    });

});