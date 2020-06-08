
document.addEventListener('DOMContentLoaded', function(){

    let dataButton = document.createElement('button');
    dataButton.id = 'databButtonInput';
    dataButton.innerText = 'Click Here!!!';
    document.body.appendChild(dataButton);

    let divOne = document.createElement('div');
    divOne.id = 'div1';
    document.body.appendChild(divOne)

    let h1Tag = document.createElement('h1')
    h1Tag.innerText = ' Hello World !'
    divOne.appendChild(h1Tag)
})

