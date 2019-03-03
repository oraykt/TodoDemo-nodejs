const fs = require('fs');

const addItem = (title, desc, date) => {
    let todoList = [];
    let todo = {
        title,
        desc,
        date
    };
    todoList = readJsonFile();
    let repeatedTodoTitle = todoList.filter((todo) => todo.title === title)
    if (repeatedTodoTitle.length === 0) {
        todoList.push(todo);
        writeToJsonFile(todoList);
    } else {
        console.log('You tried to add repeated todoItem');
    }
}

const showList = () => {
    const todoList = readJsonFile();
    if (todoList.length === 0) {
        console.log("There are not any todo item!");
    } else {
        todoList.forEach((todo) => {
            showItem(todo);
        });
    }
}

const readItem = (title) => {
    const todoList = readJsonFile();
    const foundItem = todoList.filter((todo) => todo.title === title);
    if (foundItem.length === 0) {
        console.log("Title not found!");
    } else {
        showItem(foundItem[0]);
    }
}

const deleteItem = (title) => {
    const todoList = readJsonFile();
    // const filtredTodoList = todoList.filter((todo) => todo.title !== title);
    // if (filtredTodoList.length === 0) {
    //     writeToJsonFile([]);
    // } else {
    //     writeToJsonFile(filtredTodoList);
    // }
    let foundItem;
    const newTodoList = [];
    todoList.forEach((todo) => {
        if (todo.title === title) {
            console.log("This item will removed");
            foundItem = todo;
            showItem(todo);
        } else {
            newTodoList.push(todo);
        }
    });
    if (foundItem === undefined) {
        console.log(title, " not found!");
    } else {
        writeToJsonFile(newTodoList);
    }
}

const showItem = (todo) => {
    console.log("Date: ", todo.date);
    console.log("Title: ", todo.title);
    console.log("Description: ", todo.desc);
    console.log("------------");
}

const readJsonFile = () => {
    try {
        let todoListStr = fs.readFileSync('todoList.json');
        return JSON.parse(todoListStr);
    } catch (Exception) {
        return [];
    }
}

const writeToJsonFile = (todoList) => {
    fs.writeFileSync('todoList.json', JSON.stringify(todoList));
}

module.exports = {
    addItem,
    showList,
    readItem,
    deleteItem
};