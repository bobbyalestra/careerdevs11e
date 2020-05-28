

let domHotel ={
    

  availableRooms : [101, 102, 103, 104],
  roomType : ['singles', 'Doubles', 'Queen', 'King'],
  currentRoomBooked: [],
  currentFloorBooked: [],

bookRooms: function () {
  this.availableRooms[this.currentFloorBooked].splice(this.availableRooms[this.currentFloorBooked].indexOf(this.currentRoomBooked), 1);
  this.bookedRooms
  
}

}

  linesOfHtml = "<select>"  
for (i = 0; i < availRoomslists.lenth; i++)
linesOfHtml = linesOfHtml + `<option value = '${availRoomslists[i]}'>${availRoomslists[i]} </option>`

linesOfHtml = linesOfHtml + "</select>"

document.getElementById('slogan').innerText = 'Vitory';
document.getElementById('hotelName').innerText = 'The DOM Hotel'
document.getElementById('availRoomslists').innerHTML = linesOfHtml;
