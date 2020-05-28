    let todoList ={
    todo: [],

    displayTodos: function (){
       
    if  (this.todo.lengh === 0){
    console.log("Todo list is empty!");
    }else{
            console.log("My Todo's : ")
        }

    for(i = 0; i < this.todo.length; i++){
        console.log(this.todo[i].todoText);
        if (this.todo[i].completed ===true){
            console.log('(x)',this.todo[i].todoText);
        }else{
            console.log( '( )' , this.todo[i].todoText);
        }
        

    }
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

    toggleComplete: function (position){
    let todo= this.todo[position]
    todo.completed = !todo.completed;
    this.displayTodos();
    },

    toggleAll: function(){
    let totalTodos = this.todo.length;
    let completedTodos = 0;

    for(let i = 0; i <totalTodos; i++){
    if (this.todo[i].completed === true){
    completedTodos++;
    }
    }
    if(completedTodos === totalTodos){
    for (let i = 0; i < totalTodos; i++){
    this.todo[i].completed = false;
    }
    }else{
    for (let i = 0; i < totalTodos; i++){
    this.todo[i].completed = true;
    }
    }
    this.displayTodos();
    }
    };
    let displayTodoButton =document.getElementById('displayTodoButton');
    displayTodoButton.addEventListener('click', function(){
    todoList.displayTodos()});

    let toggleAllButton =document.getElementById('toggleAllButton')
        toggleAllButton.addEventListener('click', function(){
        todoList.toggleAll()});

    let addTodoButton =document.getElementById('addTodoButton')
        addTodoButton.addEventListener('click', function(){
        todoList.addTodos()});

    let deleteTodoButton =document.getElementById('deleteTodoButton')
    deleteTodoButton.addEventListener('click', function(){
        todoList.deleteTodo()});