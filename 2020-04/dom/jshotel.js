/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(events) {
    if (!events.target.matches('.dropbtn')) {
      var dropdowns1 = document.getElementsByClassName("dropdown1-content");
      var i;
      for (i = 0; i < dropdowns1.length; i++) {
        var openDropdown1 = dropdowns[i];
        if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }
      }
    }
  }