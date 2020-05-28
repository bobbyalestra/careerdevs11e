

document.getElementById("hotelName").innerText = "Welcome To The DOM Hotel";
document.getElementById("slogan").innerText = "Where guest can CODE all night";

let hotel = {
  availableRooms: [[101,102,103,104],[201,202,203,204,],[301,302,303,],[401,402,403]],
  roomTypes: ["Single","Double","Queen","King"],
  bookedRooms: [],

  completeBookedRoomsArrays: function () {
    for (let i = 0; i < this.availableRooms.length; i++) {
      this.bookedRooms.push([]);
    }
  },

// this will convert the number string variable back into a number
bookSelectedRoom: function () {
  let selectedRoom = parseInt(document.getElementById("availableSelect").value);

  // to make sure its the right room selected was having an issue with it selecting the whole array
  console.log(selectedRoom);
for (let i = 0; i < this.availableRooms.length; i++){
  for (let j =0; j < this.availableRooms[i].length; j++ ){
    if (selectedRoom === this.availableRooms[i][j]){
      this.bookedRooms[i].push(this.availableRooms[i].splice(this.availableRooms[i].indexOf(selectedRoom), 1));
    }
  }
}
this.updateAvailableRooms();
this.updateBookedRooms();
},
unBookSelectedRoom: function () {
  let selectedRoom = parseInt(document.getElementById("unBookedSelect").value);
  console.log(selectedRoom);
  for (let i = 0; i < this.bookedRooms.length; i++) {
    for (let j = 0; j < this.bookedRooms[i].length; j++) {
      if (selectedRoom == this.bookedRooms[i][j]) {
        this.availableRooms[i].push(this.bookedRooms[i].splice(this.bookedRooms[i].indexOf(this.bookedRooms[i][j]),1));
      }
    }
  }
this.updateAvailableRooms();
this.updateBookedRooms();
},
updateAvailableRooms: function (){
  let dropDown = "<select id = 'availableSelect'>";
  for (let i = 0; i < this.availableRooms.length; i++){
  for (let j = 0; j < this.availableRooms[i].length ; j++){
    dropDown =dropDown + `<option value= '${this.availableRooms[i][j]}'> ${this.availableRooms[i][j]} </option>`;
  }
}
    dropdown = dropDown + "</select>";
    document.getElementById("dropDownAvailable").innerHTML = dropDown;
  },
  updateBookedRooms: function () {
    let dropDown = "<select id='unBookedSelect'>";
    for (let i = 0; i < this.bookedRooms.length; i++) {
      for (let j = 0; j < this.bookedRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value='${this.bookedRooms[i][j]}'>${this.bookedRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownBooked").innerHTML = dropDown;
  

function updateName (){
  localStorage.setItem('name1', document.getElementById('fName').value);
  document.getElementById("firstName").innerText = localStorage.getItem('name1');

  localStorage.setItem('name2', document.getElementById('lName').value);
  document.getElementById("lastName"),innerText = localStorage.getItem('name2');


 }
},
updateName();
}

document.getElementById("firstName").innerText = localStorage.getItem('name1');
document.getElementById("lastName").innerText = localStorage.getItem('name2');

 
 hotel.updateAvailableRooms();
 hotel.updateBookedRooms();
 hotel.completeBookedRoomsArrays();
 console.log(document.getElementById("dropDownAvailable").innerText);




q