// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false
        this.date = date
    }
}
Todo.nextId = 0;
let toDoArray = [];
// Service
class TodosService {
    constructor() {}
    // to add new task to the list
    addTodo(title = 'default task') {
        const date = new Date();
        const toDO = new Todo(title, (date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()));
        toDoArray.push(toDO);
        console.log('Add----',toDO.title,' - ', toDO.date);
    }
    // edit the title of an existing task
    editTodo(id, newTitle) {
        console.log('Edited-----');
        toDoArray.forEach((element, index) => {
            if(id === (index+1)) {
                element.title = newTitle;
            }
            console.log(element.title, element.date, element.completed);
        });
    }
    // mark a particular task as completed
    completeTodo(id) {
        console.log('CompleteToDo(id)----');
        toDoArray.forEach((element, index) => {
            if(id === (index+1)) {
                element.completed = true;
            }
            console.log(element.title, element.date, element.completed);
        });
    }
    // mark all the tasks as completed
    completeAll() {
        console.log('CompleteAll----')
        toDoArray.forEach((element, index) => {
            element.completed = true;
            console.log(element.title, element.date, element.completed);
        });
    }
    // delete a particular task
    deleteTodo(id) {
        console.log('DeleteToDo(id)---------');
        toDoArray.forEach((element, index) => {
            if((id-1) === (index)) {
               toDoArray.splice(index,1);
            }
        });
        toDoArray.forEach((element, index) => {
            console.log(element.title, element.date, element.completed);
         });
    }
    // delete the tasks, which are completed
    clearCompleted() {
        console.log('clearCompleted------');
        toDoArray.forEach((element, index) => {
            if(element.completed) {
                toDoArray.splice(index,1);
            }
        });
        toDoArray.forEach((element, index) => {
            console.log(element.title, element.date, element.completed);
         });
    }
    // view filtered list - completedor not completed
    viewTodos(filter) {
        console.log('Filter completed - ', filter);
        toDoArray.forEach((element, index) => {
            if(element.completed === filter) {
                console.log(element.title,' - ',element.date);
            }
        });
    }
}

const service = new TodosService();
service.addTodo();
service.addTodo('Task1');
service.addTodo('Task2');
service.editTodo(2, 'New Title');
service.completeTodo(2);
service.viewTodos(true);
service.deleteTodo(1);
service.clearCompleted();
service.completeAll();
service.addTodo('Task3');
console.log(toDoArray);

