let nameArray = [];


function addCarNameToArray() {
  if (Boolean(localStorage.getItem("lsCarNameArray"))) {
    let nameArray = JSON.parse(localStorage.getItem("lsCarNameArray"));
   
    let enteredName = document.getElementById("inputbox").value;
    nameArray.push(enteredName);
   
    localStorage.setItem("lsCarNameArray", JSON.stringify(nameArray));
    
    let liveNameArray = JSON.parse(localStorage.getItem("lsCarNameArray"));
    console.log(liveNameArray);
   
    let htmlList = "<ul>";
    for (let i = 0; i < liveNameArray.length; i++) {
      htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
    }
    htmlList = htmlList + "</ul>";
   
    document.getElementById("inputbox").innerHTML = htmlList;
  
} else {
    let enteredName = document.getElementById("inputbox").value;
    nameArray.push(enteredName);
    localStorage.setItem("lsCarNameArray", JSON.stringify(nameArray));
    displayNameOfCar();
  
  }
}
function displayNameOfCar() {
 
  
   liveNameArray = JSON.parse(localStorage.getItem("lsCarNameArray"));
   htmlList = "<ul>";
  for (let i = 0; i < liveNameArray.length; i++) {
    htmlList = htmlList + `<li>${liveNameArray[i]}</li>`;
  }
  htmlList = htmlList + "</ul>";
  document.getElementById("listOfCars").innerHTML = htmlList;
}
displayNameOfCar();