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
    this.todo.splice(position);
    this.displayTodos();
    },

    toggleCompleted: function (position){
    let todo= this.todo[position]
    todo.completed = !todo.completed;
    this.displayTodos();
    },

    toggleAll: function(){
    let totalTodos = this.todo.length;
    let completedTodos = 0;

    // this.todo.forEach(function(todo){
    //     if (todo.completed == true){
    //         completedTodos++;
    //     }})
    //     if(completedTodos === totalTodos){
    //         this.todo.forEach(function(todo){
    //             this.todo.completed = false
    //         } ) 
        
    //     }else{
    //     this.todo.forEach(function(todo){
    //         todo.completed = true; })
        this.todo.forEach(function(todo){
            if (completedTodos === totalTodos){
                todo.completed = false ;
            }else{
                todo.completed = true;
            }
        })
    this.displayTodos();
 }
}

   
        // let displayTodoButton =document.getElementById('displayTodoButton');
    // displayTodoButton.addEventListener('click', function(){
    // todoList.displayTodos()});

    // let toggleAllButton =document.getElementById('toggleAllButton')
    //     toggleAllButton.addEventListener('click', function(){
    //     todoList.toggleAll()});

    // let addTodoButton =document.getElementById('addTodoButton')
    //     addTodoButton.addEventListener('click', function(){
    //     todoList.addTodos()});

    // let deleteTodoButton =document.getElementById('deleteTodoButton')
    // deleteTodoButton.addEventListener('click', function(){
    //     todoList.deleteTodo()});

        let handlers = {
    
            addTodos: function(){
               let addTodoTextInput= document.getElementById('addTodoTextInput')
               todoList.addTodos(addTodoTextInput.value);
               addTodoTextInput.value=""   
               view.displayTodos(); 
            },
            changeTodos:function(){
                let changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
                let changeTodoTextInput = document.getElementById('changeTodoTextInput')
                todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
                changeTodoPositionInput.value ="";
                changeTodoTextInput.value = ""
                view.displayTodos(); 
            },
            toggleAll:function(){
                todoList.toggleAll()},
            deleteTodos:function(position){
            todoList.deleteTodo(position);
            view.displayTodos(); 
            },

            toggleCompleted: function(){
                let toggleCompletePositionInput = document.getElementById('toggleCompletedTodoPositionInput')
                todoList.toggleCompleted(toggleCompletedTodoPositionInput.valueAsNumber)
                toggleCompletedTodoPositionInput.value = "";
                view.displayTodos(); 
            }
        };
// creates a new element ......list
    // let todoLi= document.createElement('li')
    
    
    // let todoUl= document.querySelector('ul')
    
    // //inserts what you want in the UL
    // todoUl.appendChild(todoLi)

    let view = { 
        displayTodos: function(){
            let todoUl = document.querySelector('ul');
              todoUl.innerHTML="";
            for(let i = 0; i < todoList.todo.length; i++){
            let todoLi = document.createElement('li');
            let todo = todoList.todo[i]; 


            let todoTextWithCompletion = '';
            if(todo.completed === true){
                todoTextWithCompletion = ' (x) ' + todo.todoText;
            }else{
                todoTextWithCompletion = ' ( ) ' + todo.todoText;
             }
            todoLi.id= i;
            todoLi.textContent = todoTextWithCompletion ;
            todoLi.textContent = todoList.todo[i].todoText;
                todoLi.appendChild(this.createDeleteButton());
                todoUl.appendChild(todoLi);   
    }
          
        //     todoList.todo.forEach(function(todo,position){
        //     let todoLi = document.createElement('li');
        //     let todoTextWithCompletion = '';
            
        //     if(todo.completed === true){
        //          todoTextWithCompletion = ' (x) ' + todo.todoText;
        //      }else{
        //          todoTextWithCompletion = ' ( ) ' + todo.todoText;
        //       }



        //      todoLi.id= position;
        //    todoLi.textContent = todoTextWithCompletion ;
        //     todoLi.textContent = todoList.todo[i].todoText;
        //          todoLi.appendChild(this.createDeleteButton());
        //          todoUl.appendChild(todoLi);   
     
        //     }, this);



  },
    createDeleteButton: function (){
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        
        return deleteButton;
    }
};

let todoUl = document.querySelector('ul')
todoUl.addEventListener('click', function(event){
    console.log(event.target.parentNode.id)
let elementClicked = event.target;
    if(elementClicked.className === 'deleteButton'){
        
        handlers.deleteTodos(parseInt(elementClicked.parentNode.id))
    }
});


// view.setupEventListener();






