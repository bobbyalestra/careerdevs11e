

document.addEventListener('DOMContentLoaded',()  => {
let bColor = "background-color"
    let totalInsulinLocalStorageArray =  []
    // top make local storage yoyu must add a JON.Stringify the object and the push it to an array that the local storage callsback
    
    
    //let oldStorageArray = JSON.parse(localStorage.getItem(myStorage));
 
    let h1 = document.createElement('h1');
    h1.id = ' title'
    h1.className = 'title';
    h1.innerHTML = 'Diabetic Insulin Calculator';
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
    document.body.appendChild(div4);

    let h2 = document.createElement('h2');
    h2.innerText = " Carb Ratio"
    h2.id = 'h2Tag';
    //div1.appendChild(p4)
    div4.appendChild(h2)
 

     let div2 = document.createElement('div');
    div2.id = 'secondDiv';
    document.body.appendChild(div2);

    
    let div3 = document.createElement('div');
    div3.id = 'thirdDiv';
    document.body.appendChild(div3);

    let div5 = document.createElement('div');
    div5.id = 'fifthDiv';
    document.body.appendChild(div5);


    let div6 = document.createElement('div');
    div6.id = 'sixthDiv';
    document.body.appendChild(div6);
   
    let div7 = document.createElement('div');
    div7.id = 'seventhDiv';
    document.body.appendChild(div7);

    

    let p2 = document.createElement('p1');
    p2.id = 'secondP1Tag';
    //p2.innerText = 'test'
    div2.appendChild(p2);
    div5.appendChild(p2);
    div1.appendChild(p2)
    div4.appendChild(p2);
    div5.appendChild(p2);

    let p3 = document.createElement('p1');
    p3.id = 'p1Tag';
    p3.innerText = 'You can also add a custom Target by entering it below and clicking the custom target buttom followed by the inputting the Current BG, or you can select a custom Carb Ratio by inputting the Ratio and then inputting the Carb Amount, and Clicking the respective buttons ALL FIELDS MUST BE ENTERED TO USE THE CUSTOM BUTTONS INCLUDING TOP INPUT BARS.... TO COMPARE MY SONS RATIO NEEDS TO MATCH THE DROP DOWN, THE TARGET IS 120, AND HIS CORRECTION FACTOR IS 300';
    div6.appendChild(p3);

    // drop down and the option values
    let dropDown1 = document.createElement('select');
    dropDown1.id = 'firstDropDown';
    dropDown1.style.color = 'blue'
    div4.appendChild(dropDown1);

    let optionDropDown1 = document.createElement('option');
    optionDropDown1.id = 'firstOption';
    optionDropDown1.style.color = 'red'
    optionDropDown1.innerHTML = 'Breakfast 50';
    optionDropDown1.value = 50
    dropDown1.appendChild(optionDropDown1);
  

    let optionDropDown3 = document.createElement('option');
    optionDropDown3.id = 'thirdOption';
    optionDropDown3.style.color = 'blue'
    optionDropDown3.innerHTML = 'Lunch 120';
    optionDropDown3.value = 120
    dropDown1.appendChild(optionDropDown3);

    let optionDropDown2 = document.createElement('option');
    optionDropDown2.id = 'secondOption';
    optionDropDown2.style.color = 'red'
    optionDropDown2.innerHTML = 'Snack 120';
    optionDropDown2.value = 120
    dropDown1.appendChild(optionDropDown2);

    let optionDropDown4 = document.createElement('option');
    optionDropDown4.id = 'fourthOption';
  
    optionDropDown4.innerHTML = 'Dinner 50';
    optionDropDown4.value = 50;
    optionDropDown4.style.color = 'blue'
    dropDown1.appendChild(optionDropDown4);


      // input bar for covering
      let inputBar2 = document.createElement('input');
    inputBar2.id = 'secondInputBar';
    inputBar2.style.bColor = 'blue'
    inputBar2.placeholder = 'Enter Carb Amount ';
   
    div2.appendChild(inputBar2);
// input bar for BG
    let inputBar3 = document.createElement('input');
    inputBar3.id = 'thirdInputBar';
    inputBar3.placeholder = 'Enter Current BG ';
    div2.appendChild(inputBar3);
    //inout for custom Target
    let inputBar4 = document.createElement('input');
    inputBar4.id = 'fourthInputBar';
    inputBar4.placeholder = 'Enter Carb Ratio ';
    div7.appendChild(inputBar4);

    let inputBar5 = document.createElement('input');
    inputBar5.id = 'fifthInputBar';
    inputBar5.placeholder = 'Enter Target';
    div7.appendChild(inputBar5);

    let inputBar6 = document.createElement('input');
    inputBar6.id = 'sixthInputBar';
    inputBar6.placeholder = 'Enter Correction Factor';
    div7.appendChild(inputBar6);

    let coverCorrectList = document.createElement('ul');
    coverCorrectList.id = 'ul2';
    div6.appendChild(coverCorrectList);

    coverCorrectLi = document.createElement('li');
    coverCorrectLi.id = 'covercorrectLi';
    coverCorrectLi.style.color = 'blue'
    coverCorrectList.appendChild(coverCorrectLi);

    let foodUlElement = document.createElement('ul');
    foodUlElement.id = 'ul1';
    // will add the css olor style of red

    div2.appendChild(foodUlElement);

    foodListLi = document.createElement('li');
    foodListLi.id = 'foodLi';
    foodUlElement.style.color = 'red'
    foodUlElement.appendChild(foodListLi);


    // submit button for carb cover //
    let button1 = document.createElement('button');
    button1.id = "firstButton";
    button1.innerText = "Carb Cover";
    button1.style.color = 'blue'
    // for button function 
    div3.appendChild(button1);
    button1.addEventListener('click', function (){
        button1.style.color = 'red'
        let currentBG = document.getElementById('firstDropDown');
        let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
        let totalCarbs = document.getElementById("secondInputBar").value
        let firstArray =  [];
        carbCovering = (totalCarbs / carbValue )

        // adding style to the unordered list
         localStorage.setItem('carbCovering', carbCovering);
         firstArray.push('carbCovering');
            localStorage.setItem('carbCover', JSON.stringify(firstArray));

        //where the list is created in the button
        let returnCover =  "<li>" + carbCovering+ " "  +  'UNIT'   +"</li>"
        myStorage = localStorage.setItem('carbCovering', carbCovering);
        //storageGet = localStorage.getItem(myStorage)
    
        myStorageSession = sessionStorage.setItem('carbCovering', carbCovering)
        document.getElementById('foodLi').innerHTML += returnCover + ' Cover Amount'  
    //    totalInsulinLocalStorageArray.push(document.getElementById('foodLi')).value
    //    let oldStorage = JSON.parse(localStorage.getItem('carbCovering'));
    //    let storageOfTotals = oldStorage.concat(totalInsulinLocalStorageArray);
    //    document.getElementById('foodLi').value = "";
    //    let JSONnames = JSON.stringify(storageOfTotals);
    //     localStorage.setItem('String of Totals', JSONnames)
        
     }) 
  

    let button2 = document.createElement('button');
    button2.id = "secondButton";
    button2.innerText = "Carb Correction";
    button2.style.color = 'blue';
    // for button function 
    div3.appendChild(button2);
    button2.addEventListener('click', () => {
        button2.style.color = 'red'
        let currentBG = document.getElementById('thirdInputBar').value;
        let correctionValue = ((currentBG - 120) / 300);

        let returnCorrect = "<li>" + correctionValue +  " "  + " " + 'UNIT' + " " +"</li>"
        myStorage1 = localStorage.setItem('carbCorrecting', correctionValue);
        myStorageSession = sessionStorage.setItem('carbCorrecting', correctionValue)
        document.getElementById('foodLi').innerHTML += returnCorrect + 'Correction Amount';

    });
/////////////for the total amount
    let button3 = document.createElement('button');
    button3.id = 'thirdButton';
    button3.innerText = "Total Insulin";
    button3.style.color = 'blue';
    div3.appendChild(button3);
    button3.addEventListener('click', () => {
        button3.style.color = 'red'
        let currentBG = document.getElementById('thirdInputBar').value;
        let correctionValue = ((currentBG - 120) / 300);
        let currentBGTotal = document.getElementById('firstDropDown');
        let carbValue = parseInt(currentBGTotal.options[currentBGTotal.selectedIndex].value);     
        let totalCarbs = document.getElementById("secondInputBar").value

        carbCovering = (totalCarbs / carbValue )

        let totalInsulin = carbCovering + correctionValue
        
        let returnTotal = "<li>" + totalInsulin +  " " + 'UNIT' + " " +"</li>"
        myStorage1 = localStorage.setItem('Total Insulin', returnTotal);
        myStorageSession = sessionStorage.setItem('Total Insulin', returnTotal)
        document.getElementById('foodLi').innerHTML += returnTotal + 'Total Amount'

    });

/////////// for the custom Ratio
    let button4 = document.createElement('button');
    button4.id = 'fourthButton';
   button4.style.color = 'red'
    
    button4.innerText = "Custom Ratio";
    div6.appendChild(button4);
    button4.addEventListener('click', () => {

    let customRatio = document.getElementById('fourthInputBar').value;
    let carbAmount = document.getElementById('secondInputBar').value;
    let customCover = (carbAmount /customRatio)
    let returnCustomCover = "<li>" + customCover +  " "  + " " + 'UNIT' + " "  +"</li>"
    myStorage1 = localStorage.setItem('Custom Cover Insulin', customCover);
    myStorageSession = sessionStorage.setItem('Custom Cover Insulin', customCover)
    foodUlElement.style.color = 'red'
    document.getElementById('covercorrectLi').innerHTML += returnCustomCover + 'custom Cover Amount'
        button4.style.color = 'blue'
});

    let button5 = document.createElement('button');
    button5.id = 'fifthButton';
    button5.style.color = 'red'
    button5.innerText = "Custom Target";
    div6.appendChild(button5);
    button5.addEventListener('click', () => {
    button5.style.color = 'blue';

        document.getElementById('fifthButton')
    let customTarget = document.getElementById('fifthInputBar').value;
    let currentBGCustom = document.getElementById('thirdInputBar').value;

    let customCorrect = ((currentBGCustom - customTarget )  / 300);
    let returnCustomCorrect = "<li>" + customCorrect +  " "  + " " + 'UNIT' + " "+"</li>"
    myStorage1 = localStorage.setItem('Custom Target Correct', customCorrect);
    myStorageSession = sessionStorage.setItem('Custom Correct', customCorrect);
    document.getElementById('covercorrectLi').innerHTML += returnCustomCorrect + 'custom Correction Amount';
    })

    let button6 = document.createElement('button');
    button6.id = 'sixthButton';
    document.getElementById('ul2').style = 'red'
    button6.style.color = 'red'   
    button6.innerText = "Custom Correction Factor";
    div6.appendChild(button6);
    button6.addEventListener('click', () => {
        button6.style.color = 'blue'
    let customTarget = document.getElementById('fifthInputBar').value;
    let customCorrectionFactor = document.getElementById('sixthInputBar').value;
    let currentBGCustom = document.getElementById('thirdInputBar').value;

    let customCorrect = ((currentBGCustom - customTarget)  / customCorrectionFactor);
    
    // let addingtoPositive = customCorrect + customCorrect + customCorrect
    let returnCustomCorrect = "<li>" + customCorrect +  " "  + " " + 'UNIT' + " "  +"</li>"
    myStorage1 = localStorage.setItem('Custom Target Correct', customCorrect);
    myStorageSession = sessionStorage.setItem('Custom Correct', customCorrect);
    document.getElementById('covercorrectLi').innerHTML += returnCustomCorrect + 'custom Correction Amount';



    })


    let button7 = document.createElement('button');
    button7.id = 'seventhButton';
    button7.style.color = 'red'  
    button7.innerText = "Custom Total Insulin";
    div6.appendChild(button7);
    button7style = document.getElementById(seventhButton)
    button7.addEventListener('click', () => {
        button7.style.color = 'blue'
    let customTarget = document.getElementById('fifthInputBar').value;
    let customCorrectionFactor = document.getElementById('sixthInputBar').value;
    let currentBGCustom = document.getElementById('thirdInputBar').value;
    let customRatio = document.getElementById('fourthInputBar').value;
    let carbAmount = document.getElementById('secondInputBar').value;

    let customCover = carbAmount / customRatio ;
    let customCorrect = (( currentBGCustom - customTarget)  / customCorrectionFactor);

    let finalCustomInulin = customCover + customCorrect;
    document.getElementById('coverCorrectList')
    let returnFinalCustomCorrect = "<li>" + finalCustomInulin +  " "  + " " + 'UNIT' + " "  +"</li>"
    myStorage1 = localStorage.setItem('Final Custom Insulin', finalCustomInulin);
    myStorageSession = sessionStorage.setItem('Final Custom Insulin', finalCustomInulin);
    document.getElementById('covercorrectLi').innerHTML += returnFinalCustomCorrect  + 'custom Total Amount';

// if ( currentBGCustom > target){
//     button5.addEventListener('click', () => {

//         let customTarget = document.getElementById('fifthInputBar').value;
//         let currentBGCustom = document.getElementById('thirdInputBar').value;
//         let target = 120
//         let customCorrect = (customTarget - currentBGCustom)  / 300;
//         let returnCustomCorrect = "<li>" + customCorrect + "</li>"
//         document.getElementById('foodLi').innerHTML += returnCustomCorrect + 'custom Correction Amount';
    

// });
// } else {
//     let returnError = "<li>" + 'Too Low For Inuslin' + "</li>"
//     document.getElementById('foodLi').innerHTML += returnCustomCorrect + 'custom Correction Amount'; 
// }


});

// let firstArray =  [];

// localStorage.setItem('carbCovering', carbCovering);
// firstArray.push('carbCovering');
// localStorage.setItem('carbCover', JSON.stringify(firstArray));

// function getAllItems()  
// {    
//     for (i = 0; i <= localStorage.length-1; i++)    
//     {     
//         key = localStorage.key(i);    
//         val = localStorage.getItem(key);     
//     }   
// }  







// myStorageSession = sessionStorage.setItem('carbCovering', carbCovering)
// document.getElementById('foodLi').innerHTML += returnCover + ' Cover Amount'  
// totalInsulinLocalStorageArray.push(document.getElementById('foodLi')).value
// let oldStorage = JSON.parse(localStorage.getItem('carbCovering'));
// let storageOfTotals = oldStorage.concat(totalInsulinLocalStorageArray);
// document.getElementById('foodLi').value = "";
// let JSONnames = JSON.stringify(storageOfTotals);
// localStorage.setItem('String of Totals', JSONnames)

});