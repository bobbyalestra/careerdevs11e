let todoList ={
    todo: ['item1', 'item2', 'item3'],

displayTodos: function (){
console.log(todoList, this.todo)
    },


addTodos: function (todo){
this.todo.push(todo);
this.displayTodos();
},

changeTodo: function (position, newValue){
this.todo[position] = newValue;
this.displayTodos();
},

deleteTodo: function (position){
this.todo.splice(position,1);
this.displayTodos();
},


};
todoList.addTodos('clean');
todoList.changeTodo(0, 'New Item');
todoList.deleteTodo(2)
