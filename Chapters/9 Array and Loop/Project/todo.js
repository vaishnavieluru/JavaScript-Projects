let todoList = [ 
    {
    item : 'Buy Milk',
    dueDate : '4/10/2024'
    },
    {
     item : 'Go to College',
     dueDate : '5/11/2024'
    } 
];

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoitem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item : todoitem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        //let item = todoList[i].item;
        //let duedate = todoList[i].duedate;
        let {item, dueDate} = todoList[i];
        newHtml += `
        <div>
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class = 'btn-delete'  onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        </div>
        `;
        
    }
    containerElement.innerHTML = newHtml;
}