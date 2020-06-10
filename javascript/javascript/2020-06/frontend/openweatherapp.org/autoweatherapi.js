 // line 49
 
 
 
 document.addEventListener('DOMContentLoaded', function(){



    document.getElementById('button').addEventListener('click', getWeather);



    
    function getWeather() {

        const url = 'http://api.openweathermap.org/data/2.5/weather';
        const zeq = '?zip=';
        const zipCode = document.getElementById('zipCode').value
       
            const countryCode = ',us';
            const appId = '&appid=';
            const apiKey = '303ec9718ea692dafe80b2c057c74bf9';
            //const city = '4930956'   
        
            const combinedUrl = url+zeq+zipCode+countryCode+appId+apiKey; 
            const xhr = new XMLHttpRequest();
        
    
    
    
        xhr.open('GET', combinedUrl , true);
        
    
        xhr.onload = function() {
            if (zipCode.length === 5){
            if (this.readyState === 4 && this.status === 200) {
                const parsedResponseText = JSON.parse(this.responseText)
            console.log(parsedResponseText);
            
            console.log(parsedResponseText.name);
            const cityName = parsedResponseText.name

            const OK = parsedResponseText.main.temp;
            const locationUpdate = parsedResponseText.name

            const fTemp = ((OK - 273.15) * 9/5 + 32).toFixed(2);

           console.log(locationUpdate)
           
           //////////////////////////////
            var x = document.getElementById("currentWeather");
                function getLocation() {
                if (navigator.geolocation) {
                    console.log('true')
                    navigator.geolocation.getCurrentPosition(locationUpdate);
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
                }

                function showPosition(position) {
                    document.getElementById('currentWeather').innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
                }

        console.log(locationUpdate)
/////////////////////////////////////////
            console.log(fTemp);
            const tempOutput = `The Tempurature ${cityName} is ${fTemp} F`
                document.getElementById('currentWeather').innerText = tempOutput;

            const locationOutput = `This is your location ${locationUpdate}`
                document.getElementById('currentWeather').innerText = locationOutput;
    

            } else if ( this.status === 404) {
            console.log('404 ERROR');


            } else {
            alert('Enter 5 Digit Zipcode')
        }

    }
        
}
  
        xhr.send();
    }    
})
