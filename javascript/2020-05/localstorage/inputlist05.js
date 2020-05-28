
let addNames = [];
console.log('inside JS')
let parsedFoodArray = [];
let oldArrayNames =[];

 oldArrayNames=JSON.parse(localStorage.getItem('arrayNames'));



function addnameToArray(){
    nameToAdd= document.getElementById('inputBox').value
   if (nameToAdd.length != 0){

   
   
   oldArrayNames.push(nameToAdd);
   }else{ 
    //    alert('Please Enter Name')


    localStorage.setItem('lsArrayNames', JSON.stringify(arrayNames));

    parsedFoodArray = JSON.parse(localStorage.getItem('lsArrayNames'));
   }
   addnameToArray();
}

   for (i = 0; i <oldArrayNames.length; i++){
   list = list + `<li>${oldArrayNames[i]}</li>`;
   }
   list = list + '</ul>'





