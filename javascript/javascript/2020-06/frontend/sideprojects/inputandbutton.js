document.addEventListener('DOMContentLoaded', function(){


    let mainDiv = document.createElement('div');
    mainDiv.id = 'primaryDiv';
    document.body.appendChild(mainDiv);
    
    let cityInput = document.createElement('input');
    cityInput.id = 'cityInputBar';
    cityInput.placeholder = 'Enter City Name';
    mainDiv.appendChild(cityInput);

    let cityInputBtn = document.createElement('button');
    cityInputBtn.id = 'cityInputButton';
    cityInputBtn.innerText = 'Click Here To Submit';
    mainDiv.appendChild(cityInputBtn);
    
    document.getElementById('cityInputButton').addEventListener('click', displayCity);


    function displayCity () {

        const url = 'http://api.openweathermap.org/data/2.5/weather';
        const zeq = '?zip=';
        const zipCode = document.getElementById('zipCode').value
       
            const countryCode = ',us';
            const appId = '&appid=';
            const apiKey = '303ec9718ea692dafe80b2c057c74bf9';
            //const city = '4930956'   
        
            const combinedUrl = url+zeq+zipCode+countryCode+appId+apiKey; 


        let xhr = new XMLHttpRequest();

        xhr.open('GET', combinedUrl, true);

        xhr.onload = function (){
            if (this.readyState === 4 && this.status === 200){
                const responseJSON =  JSON.parse(this.responseText);
                console.log(responseJSON);

            }
        else if (this.status === 404){
            console.log(' 404 ERROR' );
        }
    }
    
        
    }





})