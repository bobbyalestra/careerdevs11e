
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

    let dropDown = document.createElement('select');
    dropDown.id = 'dropDownList'
    dropDown.innerText='Drop Down Here'
    h1Tag.appendChild(dropDown)


    let numbersList = [[1,2,3],[,14,15,16], [27,28,29] ]

    for (let i = 0; i < numbersList.length; i++){
        for(let j = 0; j < numbersList[i].length; j++)

        dropDown.innerHTML = `${numbersList[i][j]}`
    }


})

