
// let selectTag = document.createElement("select"); 
// selectTag.innerText = "SelectRoom";    
// document.body.appendChild(selectTag);   



let availableRooms = [ [101,102,103,104], [201,202,203,204], [301,302,303,30] ];

// let dropDown=  '<select>'

// for(let i= 0; i< availableRooms.length; i++){
//     for(let j =0; j < availableRooms[i].length; j++){
//         dropDown = dropDown + `<option value = '${availableRooms[i][j]}'> ${availableRooms[i][j]}</option>`
//     }
// }
// dropDown = dropDown + "</select>"





let dropDown = "<select id='dropDowns'>";
for (let i = 0; i < availableRooms.length; i++) {
  for (let j = 0; j < availableRooms[i].length; j++) {
    dropDown =
      dropDown +
      `<option value='${availableRooms[i][j]}'>${availableRooms[i][j]}</option>`;
  }
}
dropDown = dropDown + "</select>";
document.getElementById("dropDowns").innerHTML = dropDown;
