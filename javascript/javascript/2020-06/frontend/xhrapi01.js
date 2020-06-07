

// add event to make sure all the content of the dom is loaded first then the JS


document.addEventListener('DOMContentLoaded', function(){
    // grab the button and add the evenmt click and a function that will display the data content


    
    // creates a button with the id of button 
    let dataButton = document.createElement('button');
    dataButton.id = "button";
    dataButton.innerText = "Click me To see Data";
    document.body.appendChild(dataButton);


    // creates a div element with the id of outputData
    let div1 = document.createElement("div");
    div1.id='outputData';
    
    document.body.appendChild(div1);
    


    document.getElementById('button').addEventListener('click', loadContent)

// the function
function loadContent(){
    // the make a variable to a NEW XMLHttpRequest so it can add new data
    const xhr = new XMLHttpRequest();

    

    // grab the variable and use the cmd GET in caps , then the server you want and make it true 
    xhr.open('GET', 'https://api.github.com/users', true)
  
     
    xhr.onload = function(){


        const responseJSON =JSON.parse(this.responseText)



        for (let i = 0 ; i < responseJSON.user; i++){

        

        



            // var json = {"line":[{"type":"bank","name":"ABN","account":"NL47ABNA0442660960","description":"Bijgewerkt t\/m 30-10-2014","balance":"6.266,55","image":""},{"type":"bank","name":"Rabo","account":"NL89RABO0177896647","description":"","balance":"0,00","image":""}],"total":"6.266,55"}; 
            // for(var i = 0; i < json.line.length; i++)
            // {
            //     console.log("Type: " + json.line[i].type + " Name: " + json.line[i].name + " Account: " + json.line[i].account + " Description: " + json.line[i].description + " Balance: " + json.line[i].balance + " Image: " + json.line[i].image); 
            // }



        //    responseJSON.login.forEach( responseJSONUsers =>{
        //        console.log(responseJSONUsers)
        //    } )
              

        if (this.readyState === 4 && this.status === 200){
            

            html = `<ul><li>${responseJSON[i].login} ${responseJSON[1].login}   </li></ul>`

            document.getElementById('outputData').innerHTML = html;
            
            console.log(responseJSON)

            
        }else if 
            (this.status === 400){
                document.getElementById(outputData).innerText = " 404 Error Page Not Found"
            }
        }
            
    }
        xhr.send();


   
    }




})