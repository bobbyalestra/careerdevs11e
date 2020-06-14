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
    

       //const url = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150'
        

       // https://api.spoonacular.com/recipes/716429/information?apiKey&includeNutrition=true.
        // https://gateway.marvel.com:443/v1/public/characters?apikey=7e1ebe86b83061394378a628c10e2480

        
    const xhr = new XMLHttpRequest()
    const url = 'https://gateway.marvel.com:443/v1/public/characters?'
    var tsstring = new Date();
    var md5hash = CryptoJS.MD5(tsstring).toString();
    let pubKey = '7e1ebe86b83061394378a628c10e2480';
    let privKey = 'cea8507920fce6b68059955ac54c51f2c63b08ab';
    var md5hash = CryptoJS.MD5(tsstring+pubKey+privKey).toString();
    xhr.open('GET',`${url}${tsstring}&apikey=${pubKey}&hash=${md5hash}`, true)
    
    
    
    
    
    
    
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