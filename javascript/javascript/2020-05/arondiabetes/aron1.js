let diabetesDisplay ={
    display : [],

    displayFoodItem: function (){
        if (this.display.length === 0){
            console.log('This is Empty')
        }else{
            console.log('Food Items : ')
         }
         
         for(let i = 0; i <this.display.length; i++){
             console.log(this.display[i].displayText);
             if(this.display[i].completed === true){
                 console.log(( ' (x) ' ),this.display[i].displayText);
             }else{
                 console.log( '(  )',this.display[i].displayText );
             }
         }
    },

    addCurrentBG:  function (displayText){
        this.display.push({displayText : displayText,
            completed : false
    });
    this.displayInfo();
     },
     deleteInfo: function (position){
         this.display.splice(position);
         this.displayInfo();
     }
    }
    
     
    
     let handlers = {

        addCurrentBG: function(){
            let addCurrentBGText = document.getElementById('addCurrentBGtTextInput')
            diabetesDisplay.addCurrentBG(addCurrentBGText.value);
            addCurrentBGTextInput.value= " ";
            view.displayInfo();
        },
        deleteInfo: function (position) {
            diabetesDisplay.deleteInfo(position);
            view.displayInfo();

        }
     }

     let view = {

     }




     ////////

     const addForm = document.forms['add-foodItem']

     addForm.addEventListener('click' , function(food){
        food.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const foodName = document.createElement('span');
        foodName.textContent = value;
        const deletBtn = document.createElement('span');
        deleteBtn.textContent = 'delete';

        foodName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(foodName);
        li.appendChild(deleteBtn);
        display.appendChild(li);

     })