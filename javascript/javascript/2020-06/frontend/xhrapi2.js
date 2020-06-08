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

//     const xhr = new XMLHttpRequest()


//     xhr.open('GET', 'https://api.github.com/users', true)



//     xhr.onload= function(){
//         const responseJSON =JSON.parse(this.responseText)

//         if (this.readyState === 4 && this.status ===200){

//             html = `<ul><li>${responseJSON[0].login} ${responseJSON[1].login}   </li></ul>`

//             document.getElementById('outputData').innerHTML = html;
            
//             console.log(responseJSON)

//         }else if (this.status ===400){
//             document.getElementById('outputData').innerText = " 404 Error Page Not Found"

//         }
    

//     }
//     xhr.send()


    
// }



const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users', true)







xhr.onload= function (){

const responseJSON = JSON.parse(this.responseText)
if(this.readyState === 4 && this.status === 200){

    html = `<ul><li>${responseJSON[0].login} ${responseJSON[1].login}   </li></ul>`
    document.getElementById('outputData').innerHTML = html;
                
                console.log(responseJSON)



}else if(thjis.status === 400){
    document.getElementById('outputData').innerText = ' 404 ERROR'

}
}

xhr.send()

}

})