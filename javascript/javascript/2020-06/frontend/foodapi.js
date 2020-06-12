document.addEventListener('DOMContentLoaded', function(){






    let div1 = document.createElement('div');
    div1.id = 'outputData';
    document.body.appendChild(div1)
    
    
    let button1 = document.createElement('button');
    button1.id = 'dataButton';
    button1.innerText = 'Click Me For Data'
    document.body.appendChild(button1)
    
    
    document.getElementById('dataButton').addEventListener('click', loadedContent)
    
    function loadedContent(){
    
        

       // https://api.spoonacular.com/recipes/716429/information?apiKey&includeNutrition=true.
        // https://gateway.marvel.com:443/v1/public/characters?apikey=7e1ebe86b83061394378a628c10e2480


    const xhr = new XMLHttpRequest()
    // const  apiKey = 'cea8507920fce6b68059955ac54c51f2c63b08ab';
    xhr.open('GET', 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=apikey=cea8507920fce6b68059955ac54c51f2c63b08ab', true)
    
    
    
    
    
    
    
    xhr.onload= function (){
    
    const responseJSON = JSON.parse(this.responseText)
    if(this.readyState === 4 && this.status === 200){
    
        html = `<ul><li>${responseJSON[0].login} ${responseJSON[1].login}   </li></ul>`
        document.getElementById('outputData').innerHTML = html;
                    
                    console.log(responseJSON)
    
    
    
    }else if(this.status === 400){
        document.getElementById('outputData').innerText = ' 404 ERROR'
    
    }
    }
    
    xhr.send()
    
    }
    
    })