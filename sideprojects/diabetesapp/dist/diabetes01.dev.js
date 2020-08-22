"use strict";

document.addEventListener('DOMContentLoaded', function () {
  ////////////// style section///////////
  //document.getElementById("title").style.color = "red";
  //document.getElementById("firstButton").style.color = "red";
  /////////// to add styling
  var h1 = document.createElement('h1');
  h1.id = ' title';
  h1.className = 'title';
  h1.innerHTML = 'D.I.C';
  document.body.appendChild(h1); // let inputBar3 = document.createElement('input');
  // inputBar3.id = 'foodSearch';
  // inputBar3.placeholder = 'Enter Item You Are Looking For';
  // document.body.appendChild(inputBar3)

  var div1 = document.createElement('div');
  div1.id = 'firstDiv';
  document.body.appendChild(div1);
  var div4 = document.createElement('div');
  div4.id = 'fourthDiv'; // div4.innerHTML = ' fourth div';

  document.body.appendChild(div4);
  var div2 = document.createElement('div');
  div2.id = 'secondDiv'; //div2.innerHTML = 'second div';

  document.body.appendChild(div2);
  var div3 = document.createElement('div');
  div3.id = 'thirdDiv'; //div3.innerHTML = ' third div';

  document.body.appendChild(div3);
  var div5 = document.createElement('div');
  div5.id = 'fifthDiv'; //div5.innerHTML = ' third div';

  document.body.appendChild(div5);
  var p1 = document.createElement('p1');
  p1.id = 'firstP1Tag';
  p1.innerText = 'Diabetic Insulin Calculator';
  div1.appendChild(p1);
  var p2 = document.createElement('p1');
  p2.id = 'secondP1Tag'; //p2.innerText = 'test'

  div2.appendChild(p2);
  div5.appendChild(p2);
  var p3 = document.createElement('p1');
  p3.id = 'thirdP1Tag';
  div4.appendChild(p3); // drop down and the option values

  var dropDown1 = document.createElement('select');
  dropDown1.id = 'firstDropDown';
  div4.appendChild(dropDown1);
  var optionDropDown1 = document.createElement('option');
  optionDropDown1.id = 'firstOption';
  optionDropDown1.innerHTML = 'Breakfast 50';
  optionDropDown1.value = 50;
  dropDown1.appendChild(optionDropDown1);
  var optionDropDown3 = document.createElement('option');
  optionDropDown3.id = 'thirdOption';
  optionDropDown3.innerHTML = 'Lunch 120';
  optionDropDown3.value = 120;
  dropDown1.appendChild(optionDropDown3);
  var optionDropDown2 = document.createElement('option');
  optionDropDown2.id = 'secondOption';
  optionDropDown2.innerHTML = 'Snack 120';
  optionDropDown2.value = 120;
  dropDown1.appendChild(optionDropDown2);
  var optionDropDown4 = document.createElement('option');
  optionDropDown4.id = 'fourthOption';
  optionDropDown4.innerHTML = 'Dinner 50';
  optionDropDown4.value = 50;
  dropDown1.appendChild(optionDropDown4); ////////////////////////////

  var inputBar4 = document.createElement('input');
  inputBar4.id = 'fourthInputBar';
  inputBar4.placeholder = 'Select or Enter Carb Ratio ';
  div5.appendChild(inputBar4); // input bar for covering and correcting functions

  var inputBar2 = document.createElement('input');
  inputBar2.id = 'secondInputBar';
  inputBar2.placeholder = 'Enter Carb Amount ';
  div2.appendChild(inputBar2);
  var inputBar3 = document.createElement('input');
  inputBar3.id = 'thirdInputBar';
  inputBar3.placeholder = 'Enter Current BG ';
  div2.appendChild(inputBar3); // input bar for food items
  // let inputBar1 = document.createElement('input');
  // inputBar1.id = 'firstInputBar';
  // inputBar1.placeholder = 'Enter Food Item';
  // div2.appendChild(inputBar1)

  var foodUlElement = document.createElement('ul');
  foodUlElement.id = 'ul1';
  div2.appendChild(foodUlElement);
  foodListLi = document.createElement('li');
  foodListLi.id = 'foodLi';
  foodUlElement.appendChild(foodListLi);
  var foodListInputUl = document.createElement('ul');
  foodListInputUl.id = 'foodInputUl';
  div2.appendChild(foodListInputUl); // submit button for carb cover //

  var button1 = document.createElement('button');
  button1.id = "firstButton";
  button1.innerText = "Carb Cover"; // for button function 

  div3.appendChild(button1);
  var foodDisplayButton = button1.addEventListener('click', function () {
    var currentBG = document.getElementById('firstDropDown');
    var carbValue = parseInt(currentBG.options[currentBG.selectedIndex].value);
    var totalCarbs = document.getElementById("secondInputBar").value;
    carbCovering = totalCarbs / carbValue; //where the list is created in the button

    var returnCover = "<li>" + carbCovering + "</li>";
    document.getElementById('foodLi').innerHTML += returnCover + ' Cover Amount'; // return alert(carbCovering)
  }); //////////

  var button2 = document.createElement('button');
  button2.id = "secondButton";
  button2.innerText = "Carb Correction"; // for button function 

  div3.appendChild(button2);
  button2.addEventListener('click', function () {
    var currentBG = document.getElementById('thirdInputBar').value;
    var correctionValue = (currentBG - 120) / 300;
    var returnCorrect = "<li>" + correctionValue + "</li>";
    document.getElementById('foodLi').innerHTML += returnCorrect + 'Correction Amount'; //    return alert (correctionValue)
  }); /////////////for the total amount

  var button3 = document.createElement('button');
  button3.id = 'thirdButton';
  button3.innerText = "Total Insulin";
  div3.appendChild(button3);
  button3.addEventListener('click', function () {
    var currentBG = document.getElementById('thirdInputBar').value;
    var correctionValue = (currentBG - 120) / 300;
    var currentBGTotal = document.getElementById('firstDropDown');
    var carbValue = parseInt(currentBGTotal.options[currentBGTotal.selectedIndex].value);
    var totalCarbs = document.getElementById("secondInputBar").value;
    carbCovering = totalCarbs / carbValue;
    var totalInsulin = carbCovering + correctionValue;
    var returnTotal = "<li>" + totalInsulin + "</li>";
    document.getElementById('foodLi').innerHTML += returnTotal + 'Total Amount';
  }); /////////// for the custom Ratio

  var button4 = document.createElement('button');
  button4.id = 'fourthButton';
  button4.innerText = "Custom Ratio";
  div5.appendChild(button4);
  button4.addEventListener('click', function () {
    var customRatio = document.getElementById('fourthInputBar').value;
    parseInt(customRatio);
    var carbAmount = document.getElementById('secondInputBar').value;
    var customCover = customRatio / carbAmount;
    var returnCustomCover = "<li>" + customCover + "</li>";
    document.getElementById('foodLi').innerHTML += returnCustomCover + 'Total Amount';
  }); //////
});