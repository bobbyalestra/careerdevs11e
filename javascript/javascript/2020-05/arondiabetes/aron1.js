

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
        this.display.push(displayText)
    //this.displayInfo();
     },
     deleteInfo: function (position){
         this.display.splice(position);
         this.displayInfo();
     }
    }
    
     
    
     let handlers = {

        addCurrentBG: function(){
            let addCurrentBGText = document.getElementById('addCurrentBGtTextInput')
           // diabetesDisplay.addCurrentBG(addCurrentBGText).value;
            addCurrentBGTextInput.value= " ";
            view.displayInfo();
        },
        deleteInfo: function (position) {
            diabetesDisplay.deleteInfo(position);
            view.displayInfo();

        }
     }

     let view = {
         displayInfo: function(){
             let foodUl = document.querySelector('ul');
             foodUl.innerHTML= '';
             for (let i = 0; i <diabetesDisplay.display.length; i++){
                 let foodLi = document.createElement('li');
                 let food = diabetesDisplay.display[i];
                
                 foodLi.id = i;
                 foodLi.textContent = food.displayText
                foodUl.appendChild(foodLi)
                }
         },

     }


     const diabetesFoodList = document.querySelector('#food-list ul');

     diabetesFoodList.addEventListener('click', function(e){
     if(e.target.className == 'delete'){
         const li =e.target.parentElement;
         diabetesFoodList.removeChild(li);
     }
     })



     const addForm = document.forms['add-food']

     addForm.addEventListener('submit', function(e){
       e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const foodName = document.createElement('span');
        foodName.textContent = value;
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'delete';
        
        foodName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(foodName);
        li.appendChild(deleteBtn);
        diabetesFoodList.appendChild(li);

     })

     const addForms = document.forms['totalCarbsInput']

     addForms.addEventListener('submit', function(e){
       e.preventDefault();
        const value = addForms.querySelector('input[type="text"]');
        const li = document.createElement('li');
        const carbNumb = document.createElement('span');
        carbNumb.textContent = value ;
        const coverAmount = document.createElement('span');
        

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'delete';

        coverAmount.classList.add('name')
        carbNumb.classList.add('name');
        deleteBtn.classList.add('delete');



        /////// added code
       
       
        currentBG = document.getElementById('number');
        let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
        let totalCarbs = document.getElementById("totalCarbsInputs").value
    
        carbCovering = (totalCarbs / carbValue );
        coverAmount.textContent = carbCovering.value;
       
       
        ///////////////// end of added code

        li.appendChild(carbNumb);
        li.appendChild(deleteBtn);
        li.appendChild(carbCovering)
        diabetesFoodList.appendChild(li);

     })







     const hideBox = document.querySelector('#hide');
    
     hideBox.addEventListener('change', function(e){
         if(hideBox.checked){
             diabetesFoodList.style.display= 'none'
         }else{
            diabetesFoodList.style.display= 'initial'
         }
     })
     const searchBar = document.forms['search-foods'].querySelector('input');
     searchBar.addEventListener('keyup', (e) => {
       const term = e.target.value.toLowerCase();
       const foods = diabetesFoodList.getElementsByTagName('li');
       Array.from(foods).forEach((food) => {
         const title = food.firstElementChild.textContent;
         if(title.toLowerCase().indexOf(e.target.value) != -1){
           food.style.display = 'block';
      } else {
           food.style.display = 'none';
     }
     });
     });


   ///////////// below is where im having trouble 
   
       
function carbCover(){
    let currentBG = document.getElementById('number');
    let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
    let totalCarbs = document.getElementById("totalCarbsInputs").value

    carbCovering = (totalCarbs / carbValue )
    return alert(carbCovering)
}
 function carbCorrection (){
 
   let totalCarbs = document.getElementById("totalCarbsInputs").value
       let carbCorrecting=  ((totalCarbs- 110) /300) 
      return alert(carbCorrecting)
}

  function totalCoverCorrect (carbCovering,carbCorrecting){

    let currentBG = document.getElementById('number');
    let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
    let totalCarbs = document.getElementById("totalCarbsInput").value

    let totalCoverCorrecting = (carbCorrecting + carbCovering)
    return alert(totalCoverCorrecting)
  }


//          trying to add another list to log the corretion and cover

    // const value = addForm.querySelector('input[type="text"]').value;
    //     const li = document.createElement('li')
    //     const displayNumber = document.createElement('span')
    //     displayNumber.textContent = value;
    //     li.appendChild(displayNumber);
