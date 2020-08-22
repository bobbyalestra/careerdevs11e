


document.addEventListener('DOMContentLoaded',()  => {


    // top make local storage yoyu must add a JON.Stringify the object and the push it to an array that the local storage callsback
    let totalInsulinLocalStorageArray =  [];
    
 
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
    document.body.appendChild(div4);

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

    

    let p1 = document.createElement('p1');
    p1.id = 'firstP1Tag';
    p1.innerText = 'Diabetic Insulin Calculator';
    div1.appendChild(p1);
    

    let p2 = document.createElement('p1');
    p2.id = 'secondP1Tag';
    //p2.innerText = 'test'
    div2.appendChild(p2);
    div5.appendChild(p2);
    div4.appendChild(p2);
    div5.appendChild(p2);

    let p3 = document.createElement('p1');
    p3.id = 'p1Tag';
    p3.innerText = 'You can also add a custom Target by entering it below and clicking the custom target buttom followed by the inputting the Current BG, or you can select a custom Carb Ratio by inputting the Ratio and then inoutting the Carb Amount, and Clicking the respective buttons ALL FIELDS MUST BE ENTERED TO USE THE CUSTOM BUTTONS.... TO COMPARE MY SONS RATIO NEEDS TO MATCH THE DROP DOWN, THE TARGET IS 120, AND HIS CORRECTION FACTOR IS 300';
    div6.appendChild(p3);
    

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


      // input bar for covering
      let inputBar2 = document.createElement('input');
    inputBar2.id = 'secondInputBar';
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
    coverCorrectList.appendChild(coverCorrectLi);

    let foodUlElement = document.createElement('ul');
    foodUlElement.id = 'ul1';
    div2.appendChild(foodUlElement);

    foodListLi = document.createElement('li');
    foodListLi.id = 'foodLi';
    foodUlElement.appendChild(foodListLi);


    // submit button for carb cover //
    let button1 = document.createElement('button');
    button1.id = "firstButton";
    button1.innerText = "Carb Cover";
    // for button function 
    div3.appendChild(button1);
    button1.addEventListener('click', function (){
        let currentBG = document.getElementById('firstDropDown');
        let carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);     
        let totalCarbs = document.getElementById("secondInputBar").value
    
        carbCovering = (totalCarbs / carbValue )
       

        //where the list is created in the button
        let returnCover = "<li>" + carbCovering+ " "  + " " + 'UNIT' + " "+new Date() +"</li>"
        myStorage = localStorage.setItem('carbCovering', carbCovering)
        myStorageSession = sessionStorage.setItem('carbCovering', carbCovering)
        let returnText = document.getElementById('foodLi').innerHTML += returnCover + ' Cover Amount'
        let totalInsulinLocalStorageJSON = JSON.stringify(myStorage); 
        totalInsulinLocalStorageArray.push(totalInsulinLocalStorageJSON)
     }) 
    

    let button2 = document.createElement('button');
    button2.id = "secondButton";
    button2.innerText = "Carb Correction";
    // for button function 
    div3.appendChild(button2);
    button2.addEventListener('click', () => {
        let currentBG = document.getElementById('thirdInputBar').value;
        let correctionValue = ((currentBG - 120) / 300);

        let returnCorrect = "<li>" + correctionValue +  " "  + " " + 'UNIT' + " " +new Date() +"</li>"
        myStorage1 = localStorage.setItem('carbCorrecting', correctionValue);
        myStorageSession = sessionStorage.setItem('carbCorrecting', correctionValue)
        document.getElementById('foodLi').innerHTML += returnCorrect + 'Correction Amount';
    //    return alert (correctionValue)

    });
/////////////for the total amount
    let button3 = document.createElement('button');
    button3.id = 'thirdButton';
    button3.innerText = "Total Insulin";
    div3.appendChild(button3);
    button3.addEventListener('click', () => {
        let currentBG = document.getElementById('thirdInputBar').value;
        let correctionValue = ((currentBG - 120) / 300);
        let currentBGTotal = document.getElementById('firstDropDown');
        let carbValue = parseInt(currentBGTotal.options[currentBGTotal.selectedIndex].value);     
        let totalCarbs = document.getElementById("secondInputBar").value

        carbCovering = (totalCarbs / carbValue )

        let totalInsulin = carbCovering + correctionValue
        

        let returnTotal = "<li>" + totalInsulin +  " "  + " " + 'UNIT' + " " +new Date() +"</li>"
        myStorage1 = localStorage.setItem('Total Insulin', returnTotal);
        myStorageSession = sessionStorage.setItem('Total Insulin', returnTotal)
        document.getElementById('foodLi').innerHTML += returnTotal + 'Total Amount'

    });

/////////// for the custom Ratio
    let button4 = document.createElement('button');
    button4.id = 'fourthButton';
    button4.innerText = "Custom Ratio";
    div6.appendChild(button4);
    button4.addEventListener('click', () => {

    let customRatio = document.getElementById('fourthInputBar').value;
    let carbAmount = document.getElementById('secondInputBar').value;
    let customCover = customRatio / carbAmount;
    let returnCustomCover = "<li>" + customCover +  " "  + " " + 'UNIT' + " " +new Date() +"</li>"
    myStorage1 = localStorage.setItem('Custom Cover Insulin', customCover);
    myStorageSession = sessionStorage.setItem('Custom Cover Insulin', customCover)
    document.getElementById('covercorrectLi').innerHTML += returnCustomCover + 'custom Cover Amount'

});

    let button5 = document.createElement('button');
    button5.id = 'fifthButton';
    button5.innerText = "Custom Target";
    div6.appendChild(button5);
    button5.addEventListener('click', () => {

    let customTarget = document.getElementById('fifthInputBar').value;
    let currentBGCustom = document.getElementById('thirdInputBar').value;

    let customCorrect = ((currentBGCustom - customTarget )  / 300);
    let returnCustomCorrect = "<li>" + customCorrect +  " "  + " " + 'UNIT' + " " +new Date() +"</li>"
    myStorage1 = localStorage.setItem('Custom Target Correct', customCorrect);
    myStorageSession = sessionStorage.setItem('Custom Correct', customCorrect);
    document.getElementById('covercorrectLi').innerHTML += returnCustomCorrect + 'custom Correction Amount';
    })

    let button6 = document.createElement('button');
    button6.id = 'sixthButton';
    button6.innerText = "Custom Correction Factor";
    div6.appendChild(button6);
    button6.addEventListener('click', () => {

    let customTarget = document.getElementById('fifthInputBar').value;
    let customCorrectionFactor = document.getElementById('sixthInputBar').value;
    let currentBGCustom = document.getElementById('thirdInputBar').value;

    let customCorrect = ((currentBGCustom - customTarget)  / customCorrectionFactor);
    // let addingtoPositive = customCorrect + customCorrect + customCorrect
    let returnCustomCorrect = "<li>" + customCorrect +  " "  + " " + 'UNIT' + " " +new Date() +"</li>"
    myStorage1 = localStorage.setItem('Custom Target Correct', customCorrect);
    myStorageSession = sessionStorage.setItem('Custom Correct', customCorrect);
    document.getElementById('covercorrectLi').innerHTML += returnCustomCorrect + 'custom Correction Amount';



    })


    let button7 = document.createElement('button');
    button7.id = 'seventhButton';
    button7.innerText = "Custom Total Insulin";
    div6.appendChild(button7);
    button7.addEventListener('click', () => {

    let customTarget = document.getElementById('fifthInputBar').value;
    let customCorrectionFactor = document.getElementById('sixthInputBar').value;
    let currentBGCustom = document.getElementById('thirdInputBar').value;
    let customRatio = document.getElementById('fourthInputBar').value;
    let carbAmount = document.getElementById('secondInputBar').value;

    let customCover = customRatio / carbAmount;
    let customCorrect = (( currentBGCustom - customTarget)  / customCorrectionFactor);

    let finalCustomInulin = customCover + customCorrect;
    let returnCustomCorrect = "<li>" + finalCustomInulin +  " "  + " " + 'UNIT' + " " +new Date() +"</li>"
    myStorage1 = localStorage.setItem('Final Custom Insulin', finalCustomInulin);
    myStorageSession = sessionStorage.setItem('Final Custom Insulin', finalCustomInulin);
    
    document.getElementById('covercorrectLi').innerHTML += returnCustomCorrect + 'custom Total Amount';

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

});