


document.addEventListener('DOMContentLoaded',()  => {

   let form1 = document.createElement('FORM');
   form1.id = 'firstForm';
   document.body.appendChild(form1);


    let div1 =document.createElement('div');
    div1.id = 'firstDiv';
    div1.innerText = 'test'
    document.body.appendChild(div1);

    let dropDown1 = document.createElement('select');
    dropDown1.id = 'firstDropDown';
    div1.appendChild(dropDown1);

    let inputBar1 = document.createElement('input');
    inputBar1.id = 'firstInputBar';
    inputBar1.placeholder = 'Enter Food Item';
    div1.appendChild(inputBar1)

    let foodUlElement = document.createElement('ul');
    foodUlElement.id = 'ul1';
    div1.appendChild(foodUlElement);

    let foodListInputUl = document.createElement('ul');
    foodListInputUl.id = 'foodInputUl';
    div1.appendChild(foodListInputUl)


// lrft here




    let diabetesDisplay = {
        foodDisplay: [],

        displayFoodItem: function () {
            if (this.foodDisplay.length === 0 ) {
                alert("Please Enter An Item");

            }else {
                console.log("Food Item : ");

            }

            for (let i = 0; i < this.foodDisplay.length; i++){
                console.log(this.foodDisplay[i].displayText);
                if(this.display[i].completed === true){
                    console.log(( ' (x) ' ),this.foodDisplay[i].displayText);
                }else{
                    console.log( '(  )',this.foodDisplay[i].displayText );
                }
            }
       },


        addCurrentBg: function (displayText) {
            this.foodDisplay.push(displayText)

        },
        
        deleteInfo: function (position) {
            this.foodDisplay.splice(position);
         
            this.displayInfo();
        
        }
    }
        
         let handlers = {

            addCurrentBg: function() {
                let currentBgText = document.getElementById

                addCurrentBgTextInput,value = '';

                view.displayInfo();
        }
    }

        let view = {

            displayInfo: function (){

                let foodUl = document.getElementById('ul1');
                foodUl.innerHTML = '';

                for (let i = 0; i < diabetesDisplay.foodDisplay.length; i++){

                    let foodLi = document.createElement('li');
                    let food = diabetesDisplay.foodDisplay[i];

                    foodLi.id = i ;
                    foodLi.textContent = food.displayText;
                    foodUl.appendChild(foodLi)
                }

            },

        }

        const diabetesFoodList = document.getElementById('foodInputUl');

        diabetesFoodList.addEventListener('submit', function(e){
           if (e.target.className == 'delete') {
               const li = e.target.parentElement;
               diabetesFoodList.removeChild(li);
           }
        })


        const addForm = document.forms('firstForm')

        addForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = addForm.getElementById('firstInputBar')
            const li = document.createElement('li');
            const foodName = document.createElement('span');
            foodName.textContent = value;
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'delete';

            foodName.classList.add('name');
            deleteBtn.classList.add('delete');

            li.appendChild(foodName);
            li.appendChild(deleteBtn)
            foodUlElement.appendChild(li)
        })






})