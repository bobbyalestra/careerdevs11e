console.log('What the hell is going on');

let hotel = {
    hotelName: "js localStorage Hotel",
    availableRooms: [ [ 101, 102, 103], [201, 202, 203, 204], [301] ],

    updateAvailableRooms: function() {

         document.getElementById('availableRoomsList').innerHTML = "Hmmmm!";

    },

    updateAvailableRooms: function() {
        let dropDown = '<select>';
        for (let i = 0; i < this.availableRooms.length; i++) {
            for (let j = 0; j < this.availableRooms[i].length; j++) { 
            dropDown = dropDown + `<option value='${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;
           }
       }   
        dropDown = dropDown + '</select>';
        document.getElementById('availableRoomsList').innerHTML = dropDown;

   }
}


// document.getElementById('name').innerText = hotel.hotelName;

if (Boolean(localStorage.getItem('hotel'))) {
            // start running the program
            // grab list of rooms from localStorage
            // parse and store in live object
            
            let hotelString = localStorage.getItem('hotel')
            hotel = JSON.parse(hotelString);

         


        } else {
            // create add the hotel object to localStorage
            localStorage.setItem('hotel', JSON.stringify(hotel));

        }










//////////// Bobbys Playground /////////////////////////////
 // used functions



// let hotel ={
//     hotelName : "JS DOM LocalStorage Space",
//     availableRooms : [ [101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404] ],
    




    
//         updateAvailableRooms: function (){
//             document.getElementById('availableRooms').innerText = "Heres A List of Available Rooms to Book"
//         },
   

       
        
//     }
//     function  updateAvailRooms () {
//         let dropDown = `<select id = 'roomsAvailable' >`;
//         for(i = 0; i <hotel.availableRooms.length; i++){
//             for (j = 0; j <hotel.availableRooms[i].length; j++){
//                 dropDown = dropDown + `<option value = '${hotel.availableRooms[i][j]}>'${hotel.availableRooms[i][j]} </option>`
//             }
//         }
//         dropDown= dropDown + '</select>';
//         document.getElementById('availableRoomsList').innerHTML = dropDown
//     }
//          function setLocalStorage(){
//             localStorage.setItem('hotel', JSON.stringify(hotel));
//         }    
//         setLocalStorage ();
//     // by checking the Boolean it will determine whether or not the local Storage has the hptel object stored.
        
//         //this changes the object hotel into an array in order to view the diiferent keys values as we wrote them as an array
//          // call the function to take action
            
        
//         if (Boolean(localStorage.getItem('hotel'))){
            
//             let hotelString = localStorage.getItem('hotel')
//             hotel = JSON.parse(hotelString);
            
//       updateAvailRooms();
        
//         } else{
//             localStorage.setItem('hotel', JSON.stringify(hotel));
//         }
    



        // let hotel ={
        //     hotelName : "JS DOM LocalStorage Space",
        //     availRooms : [ [101, 102, 103, 104], [201, 202, 203, 204], [301, 302, 303, 304], [401, 402, 403, 404] ],
               
      

            
        //     updateAvailableRooms: function (){
        //             document.getElementById('availableRooms').innerText = "Heres A List of Available Rooms to Book"
        //         },
    
            
        //   updateAvailableRooms: function  () {
        //          let dropDown = `<select>`;
        //         for(i = 0; i <this.availRooms.length; i++){
        //             for (j = 0; j <this.availRooms[i].length; j++){
        //                 dropDown = dropDown + `<option value = '${this.availRooms[i][j]}>'${this.availRooms[i][j]} </option>`
        //             }
        //         }
        //         dropDown= dropDown + '</select>';
        //         document.getElementById('availableRoomsList').innerHTML = dropDown
            
         
            // by checking the Boolean it will determine whether or not the local Storage has the hotel object stored.
            
                //this changes the object hotel into an array in order to view the different keys values as we wrote them as an array
                 // call the function to take action
            
              
        //         if (Boolean(localStorage.getItem('hotel'))){
                    
        //             let hotelString = localStorage.getItem('hotel')
        //             hotel = JSON.parse(hotelString);
           
        //         } else{
        //             localStorage.setItem('hotel', JSON.stringify(hotel));
        //         }
            
        //     }
        // }
