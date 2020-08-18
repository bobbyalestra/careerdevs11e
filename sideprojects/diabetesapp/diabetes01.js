


document.addEventListener('DOMContentLoaded',()  => {

//    let form1 = document.createElement('form');
//    form1.id = 'firstForm';
//    document.body.appendChild(form1);


    let div1 =document.createElement('div');
    div1.id = 'firstDiv';
    //div1.innerText = 'test'
    document.body.appendChild(div1);


    // drop down and the option values
    let dropDown1 = document.createElement('select');
    dropDown1.id = 'firstDropDown';
    div1.appendChild(dropDown1);

    let optionDropDown1 = document.createElement('option');
    optionDropDown1.id = 'firstOption';
    optionDropDown1.innerHTML = 'Breakfast 50';
    dropDown1.appendChild(optionDropDown1);
  

    let optionDropDown3 = document.createElement('option');
    optionDropDown3.id = 'thirdOption';
    optionDropDown3.innerHTML = 'Lunch 120';
    dropDown1.appendChild(optionDropDown3);

    let optionDropDown4 = document.createElement('option');
    optionDropDown4.id = 'fourthOption';
    optionDropDown4.innerHTML = 'Dinner 50';
    dropDown1.appendChild(optionDropDown4);

    let optionDropDown2 = document.createElement('option');
    optionDropDown2.id = 'secondOption';
    optionDropDown2.innerHTML = 'Morning Snack 120';
    dropDown1.appendChild(optionDropDown2);
    ////////////////////////////


    // input bar for food items
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


    // submit button
    let button1 = document.createElement('button');
    button1.id = "firstButton";
    button1.innerText = "Click To Submit";
    div1.appendChild(button1);


    // input bar for covering and correcting functions

    let inputBar2 = document.createElement('input');
    inputBar1.id = 'secondInputBar';
    inputBar2.placeholder = 'Enter Number for Cover or Correct';
    div1.appendChild(inputBar2)




//   trying to add the onclick so it will subit the value from the input bar

    function buttonSubmit (){

    }

//////
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

        // trying to add the input value to a UL then to a span
        const addForm = document.forms['firstForm']

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

        const addForms = document.forms['firstForm']


        ///// add trying to make it so when you click button it submits input

     

        ////// end of new code
        addForms.addEventListener ('submit', function (e) {
            e.preventDefault();
            const value = addForms.getElementById('firstForm');
            const li = document.createElement('li')
            const carbNumber = document.createElement('span');
            carbNumber.textContent = value ;
            const coverAmount = document.createElement('span');

            const deleteBtn = document.createElement('span');
            deleteBtn.textContent - 'delete'


            carbNumber.classList.add('name');
            deleteBtn.classLust.add('delete');
            foodInputUl.appendChild(li)

        })

        // const hideBox = document.querySelector('#hide');

        // hideBox.addEventListener('change', function(e) {
       
        // })
})