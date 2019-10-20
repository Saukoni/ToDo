let todo;
let list = document.querySelector('ul.list');
let addTask = document.querySelector('.addTask');
addTask.addEventListener('click', () => {
    let inputVal = document.querySelector('.task').value;
    let li = document.createElement('li');
    let text = document.createTextNode(inputVal);
    li.appendChild(text);
    if(inputVal == '') {
        alert('Поле не должно быть пустым!');
    } else {
        list.appendChild(li);
    }
    document.querySelector('.task').value = '';
    let deleteBut = document.createElement('button');
    deleteBut.style.marginLeft = 30 + 'px';
    let d = document.createTextNode('X');
    deleteBut.appendChild(d);
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.appendChild(deleteBut);
    toLocal();
});
list.addEventListener('click', (e) => {
    let target = e.target;
    if(target.tagName === 'BUTTON'){
        target.parentElement.style.display = 'none';
    } else if(target.tagName === 'INPUT'){
        if(target.checked) {
            target.parentElement.style.textDecoration = 'line-through';
        } else {
            target.parentElement.style.textDecoration = 'none';
        }
    }
    toLocal();
});
function toLocal() {
    todo = list.innerHTML;
    localStorage.setItem('todo', todo);
}
if(localStorage.getItem('todo')){
    list.innerHTML = localStorage.getItem('todo');
}
