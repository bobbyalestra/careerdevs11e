
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('button').addEventListener('click', getData);

    function getData() {

    const token = 'kdq4jYhMhIVfKbtbh75v';
    const url = 'https://the-one-api.herokuapp.com/v1';
        

    let xhr = new XMLHttpRequest()

    xhr.open('GET', url, true);

    xhr.onload = function (){
        if (this.readyState === 4 && this.status === 200){
            const parsedResponseText = JSON.parse(this.responseText)
            console.log(parsedResponseText);
        } else if ( this.status === 404) {
    console.log('404 ERROR');
        }
    }

xhr.send()
    }
})


