


document.addEventListener('DOMContentLoaded',()  => {

    ////////////// style section///////////

    //document.getElementById("title").style.color = "red";
    //document.getElementById("firstButton").style.color = "red";




    /////////// to add styling
 
    let h1 = document.createElement('h1');
    h1.id = ' title'
    h1.className = 'title';
    h1.innerHTML = 'D.I.C';
    document.body.appendChild(h1);

    // let inputBar3 = document.createElement('input');
    // inputBar3.id = 'foodSearch';
    // inputBar3.placeholder = 'Enter Item You Are Looking For';
    // document.body.appendChild(inputBar3)


    let div1 =document.createElement('div');
    div1.id = 'firstDiv';
    document.body.appendChild(div1);

    let div4 = document.createElement('div');
    div4.id = 'fourthDiv';
    // div4.innerHTML = ' fourth div';
    document.body.appendChild(div4);

     let div2 = document.createElement('div');
    div2.id = 'secondDiv';
    //div2.innerHTML = 'second div';
    document.body.appendChild(div2);

    
    let div3 = document.createElement('div');
    div3.id = 'thirdDiv';
    //div3.innerHTML = ' third div';
    document.body.appendChild(div3);

    

    let p1 = document.createElement('p1');
    p1.id = 'firstP1Tag';
    p1.innerText = 'Diabetic Insulin Calculator';
    div1.appendChild(p1);

    let p2 = document.createElement('p1');
    p2.id = 'secondP1Tag';
    div2.appendChild(p2);

    let p3 = document.createElement('p1');
    p3.id = 'thirdP1Tag';
    div4.appendChild(p3);


    // drop down and the option values
    let dropDown1 = document.createElement('select');
    dropDown1.id = 'firstDropDown';
    div4.appendChild(dropDown1);

    let optionDropDown1 = document.createElement('option');
    optionDropDown1.id = 'firstOption';
    optionDropDown1.innerHTML = 'Breakfast 50';
    optionDropDown1.value = 50
    dropDown1.appendChild(optionDropDown1);
  

    let optionDropDown3 = document.createElement('option');
    optionDropDown3.id = 'thirdOption';
    optionDropDown3.innerHTML = 'Lunch 120';
    optionDropDown3.value = 120
    dropDown1.appendChild(optionDropDown3);

    let optionDropDown2 = document.createElement('option');
    optionDropDown2.id = 'secondOption';
    optionDropDown2.innerHTML = 'Snack 120';
    optionDropDown2.value = 120
    dropDown1.appendChild(optionDropDown2);

    let optionDropDown4 = document.createElement('option');
    optionDropDown4.id = 'fourthOption';
    optionDropDown4.innerHTML = 'Dinner 50';
    optionDropDown4.value = 50;
    dropDown1.appendChild(optionDropDown4);

   
    ////////////////////////////


  

      // input bar for covering and correcting functions
      let inputBar2 = document.createElement('input');
    inputBar2.id = 'secondInputBar';
    inputBar2.placeholder = 'Enter Number for Cover or Correct';
    div2.appendChild(inputBar2);

    // input bar for food items
    let inputBar1 = document.createElement('input');
    inputBar1.id = 'firstInputBar';
    inputBar1.placeholder = 'Enter Food Item';
    div2.appendChild(inputBar1)

    let foodUlElement = document.createElement('ul');
    foodUlElement.id = 'ul1';
    div2.appendChild(foodUlElement);

    foodListLi = document.createElement('li');
    foodListLi.id = 'foodLi';
    foodUlElement.appendChild(foodListLi);

    let foodListInputUl = document.createElement('ul');
    foodListInputUl.id = 'foodInputUl';
    div2.appendChild(foodListInputUl);  

    // submit button //   trying to add the onclick so it will submit the value from the input bar
    let button1 = document.createElement('button');
    button1.id = "firstButton";
    button1.innerText = "Click To Submit";
    // for button function 
    div3.appendChild(button1);
    button1.addEventListener('click', function (){
        let currentBG = document.getElementById('firstDropDown');
        let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
        let totalCarbs = document.getElementById("secondInputBar").value
    
        carbCovering = (totalCarbs / carbValue )
       
        return alert(carbCovering)
    
    // }) 
    //////////
    

    



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
                let currentBgText = document.getElementById('secondInputBar')

                addCurrentBgTextInput,value = '';
                view.displayInfo();
            },

            deleteInfo: function (position) {
                diabetesDisplay.deleteInfo(position);
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

        // trying to add the input value to a UL then to a span from the foodsName
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

        
  

        // trying to log the cover and correct value to the list
        const addForms = document.forms['firstForm']
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
            foodUlElement.appendChild(li)

        })

        // const hideBox = document.querySelector('#hide');

        // hideBox.addEventListener('change', function(e) {
       
        // })


        // function carbCover() {
        //     let buttonForCover = document.getElementById('firstButton')
        //     buttonForCover.addEventListener('click', () =>{

        //         let currentBG = document.getElementById('firstDropDown');
        //         let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);
        //         let totalCarbs = document.getElementById('secondInputBar').value;
            
        //         carbCovering = (totalCarbs / carbValue);
            
        //         return alert(carbCovering);
            
    
        //     })
        // }


        function carbCover(){
            let currentBG = document.getElementById('firstDropDown');
            let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
            let totalCarbs = document.getElementById("secondInputBar").value
        
            carbCovering = (totalCarbs / carbValue )
           
            return alert(carbCovering)
        }

})

// const searchBar = document.getElementById('foodSearch');
// searchBar.addEventListener('change', (e) => {

//    const term = e.target.value.toLowerCase();
//     const foods = foodUlElement.getElementsByTagName('ul1');
//     Array.from(foods).forEach((food) => {
//         const title = food.firstElementChild.textContent;
//         if (title.toLowerCase().indexOf(e.target.value) != -1){
//             food.style.display = 'block';
//         } else {
//             food.style.display = 'none';
//         }
//     });
// });





})

        
   
    
 
