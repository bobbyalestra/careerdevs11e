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
  
  addCurrentBG: function (todoText){
  
        this.todo.push({
    todoText: todoText,
    completed: false
    });
    this.displayTodos();
    },
    deleteTodo: function (position){
    this.todo.splice(position);
    this.displayTodos();
    },
  }
      let handlers = {
    
        addCurrentBG: function(){
               let addTodoTextInput= document.getElementById('addTodoTextInput')
               todoList.addCurrentBG(addTodoTextInput.value);
               addTodoTextInput.value=""   
               view.displayTodos(); 
            },       
            deleteTodos:function(position){
                todoList.deleteTodo(position);
                view.displayTodos(); 
                }, 
        };
  
  
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
   
// /////////
// let nameArray = [];


// function addCurrentBgLs() {
//   if (Boolean(localStorage.getItem("lsCurrentBg"))) {
//     let nameArray = JSON.parse(localStorage.getItem("lsCurrentBg"));
   
//     let enteredName = document.getElementById("inputbox").value;
//     nameArray.push(enteredName);
   
//     localStorage.setItem("lsCurrentBg", JSON.stringify(nameArray));
    
//     let liveNameArray = JSON.parse(localStorage.getItem("lsCurrentBg"));
//     console.log(liveNameArray);
   
//     let htmlList = "<ul>";
//     for (let i = 0; i < liveNameArray.length; i++) {
//       htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
//     }
//     htmlList = htmlList + "</ul>";
   
//     document.getElementById("inputbox").innerHTML = htmlList;
  
// } else {
//     let enteredName = document.getElementById("inputbox").value;
//     nameArray.push(enteredName);
//     localStorage.setItem("lsCurrentBg", JSON.stringify(nameArray));
//     displayNameOfCar();
  
//   }
// }
// function addCurrentBG() {
 
  
//    liveNameArray = JSON.parse(localStorage.getItem("lsCurrentBg"));
//    htmlList = "<ul>";
//   for (let i = 0; i < liveNameArray.length; i++) {
//     htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
//   }
//   htmlList = htmlList + "</ul>";
//   document.getElementById("currentBG").innerHTML = htmlList;
// }
// addCurrentBgLs()///////
  
   diabetesScanner = {
    todaysTime: "", // refers to the  parameters of the scanId "id"function
    todaysDay: "", // refers to the  parameters of the scanId "name"function
    currentBG: "", // refers to the  parameters of the scanId "carbCorrection"function
    currentBG: "", //  // refers to the  parameters of the scanId "amount"function
    todaysTimesingroup: [],
    todaysDayingroup: [],
    lowBGlevel: [],
    highBGlevel: [],
    allitemsScanned: [],
    totalmathdone : (this.currentBG * this.currentBG),//give me the total of the specific item
    
  timeOfDay : ['Morning', 'Afternoon', 'Night', 'Midnight', 'TwoAM' ],
  
    
    setupLocalStorage: function (){
      if (Boolean(localStorage.getItem('addTodoTextInput'))){
                      
         currentBG = localStorage.getItem('addTodoTextInput')
        hotel = JSON.parse();
  
  } else{
        localStorage.setItem('addTodoTextInput', JSON.stringify(currentBG));
    }
    },
  
    
    
    itemsScanned: function() {
      
      this.todaysTimesingroup.push(this.todaysTime);
      this.todaysDayingroup.push(this.todaysDay);
       
      console.log(`Time: ${this.todaysTime}`);
      console.log(`Today is: ${this.todaysDay}`);
      console.log(` Arons BG levels were ${diabetesScanner.currentBG}, on ${this.todaysDay} with a correction factor of `)
  
    },
    
    itemsNotScanned: function() {
      if (this.todaysTime !== this.lowBGlevel)
        console.log(`!!!WARNING ARON HAS HIGH BG!!!`);
      },
      
    //
    }  
    function scanId(id, name, inout, amount, carbCorrection) {
    diabetesScanner.todaysTime = id;
    diabetesScanner.todaysDay = name;
    diabetesScanner.currentBG = amount;
    diabetesScanner.currentBG = carbCorrection;
    totalCostOfItem = (((amount) - (carbCorrection)) / 350);
    correctionCarbFormula = ((amount - 180) /350 )
  
  
    if (inout == "in") {
      diabetesScanner.itemsScanned();
     console.log(totalCostOfItem)
      
    } else if (inout !== "in") {
      diabetesScanner.itemsNotScanned();
    } 
    console.log(` ${""} `);
  }
  
  
  
  
   
  scanId("730", "Monday", "in", 465, 150);
  scanId("1000", "Tuesday", "in",387, 150);
  scanId("1500", "Wedneday", "in", 435, 150);
  scanId("1600", "Thursday", "in",  512, 150);
  scanId("1900", "Friday", "in", 416, 150);
  scanId("1600", "Saturday", "in",  512, 150);
  scanId("1900", "Sunday", "in", 416, 150);
  
  console.log (` <..::THERE IS NOTHING IN THE WORLD MOMMY AND DADDY WOULDNT DO FOR YOU!::..> `);
  console.log(` ${""} `); // adding a space
  
  console.log(` ${""} `);
  
  
  //            1000 current 1111
  
  // car decrease 350 -325
  
      
    function carbCorrect() {
      
      // let currentBG = document.carbCorrectionCalc.bgLevels;
      let currentBG = document.carbCorrectionCalc.number;
      
       let carbCorrect = ((currentBG.value -150) /325);
          
      alert(carbCorrect);
    }
  function carbCover(totalCarbs, insulinCarbRatio){
        let carbCover = document.carbCover.carb; 
  
         insulinToCarbCorrect = (totalCarbs / insulinCarbRatio);
        alert(carbCover);
  
       totalCarbs = 55;
       insulinCarbRatio = 180
    }
  
  
