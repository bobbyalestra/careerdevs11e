


document.addEventListener('DOMContentLoaded',()  => {

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

        diabetesFoodList.addEventListener('click', function(e){
           if (e.target.className == 'delete') {
               const li = e.target.parentElement;
               diabetesFoodList.removeChild(li);
           }
        })


        const addForm = document.forms['add-food']

        addForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = addForm.querySelector('input[type="text"]')
        })






})