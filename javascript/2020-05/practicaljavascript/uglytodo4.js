let todoList ={
    todo: [],

displayTodos: function (){
console.log(todoList, this.todo)
    },


addTodos: function (todoText){
this.todo.push({
    todoText: todoText,
    completed: false

});
this.displayTodos();

},

changeTodo: function (position, todoText){
//this.todo[position] = newValue;
this.todo[position].todoText = todoText;
this.displayTodos();
},

deleteTodo: function (position){
this.todo.splice(position,1);
this.displayTodos();
},



};
todoList.addTodos('this is an objoect');
todoList.displayTodos();