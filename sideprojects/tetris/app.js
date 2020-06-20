document.addEventListener('DOMContentLoaded', function(){

    

    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start');

    const width = 10;
    //console.log(squares);
    


    // The tetreminos

    const lTetremino = [
        [1,width+1, width*2+1],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    const zTetremino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0,width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]
    const tTetremino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1,width, width+1, width*2+1],

    ]
    const oTetremino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
    ]
    const iTetremino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],

    ]
    
    const theTetreminos = [lTetremino, zTetremino, tTetremino, oTetremino, iTetremino]

    let currentPosition = 4;
    let currentRotation = 0;


    // grabs the lTetremino 
    let random = Math.floor(Math.random()*theTetreminos.length);
    //console.log(random)
    let current = theTetreminos[random][currentRotation];
    //console.log(current)

    // drawing first rotation in first tetremino
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetremino')

        })
    }
    


    // undraw the tetremino

    function undraw (){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetremino')

    })
}












})