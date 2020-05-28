// new
//an array
let todos = ['item1','item2','item3']


function displayTodos(){
    console.log(todos)
};
// change inside () to add the filling
displayTodos()



function addTodos(todo){
    todos.push(todo);
    displayTodos();
}


addTodos('something to do');

function changeTodos(position, newValue){
    todos[position] = newValue;
    displayTodos();

}
changeTodos(0, 'changed')

function deleteTodos (position){
    todos.splice(position,1);
    displayTodos();
}
deleteTodos(2)


