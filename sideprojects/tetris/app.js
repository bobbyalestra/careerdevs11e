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
    
    const theTetreminos = [lTetremino, zTetremino, tTetremino, oTetremino, iTetremino];

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
    draw()


    // undraw the tetremino

    function undraw (){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetremino')

    })
};

    // make tetreminos move down by 1 second
    
    timerId = setInterval(moveDown, 1000);

    // move down function

    function moveDown(){
        undraw();
        currentPosition += width;
        draw();
        freeze();

    }

    // freeze function
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            // starting a new tetremino falling
            random = Math.floor(Math.random() * theTetreminos.length);
            current =theTetreminos[random][currentRotation];
            currentPosition = 4;
            draw();
        }
    }

    // mopve tetremino left unless there is blockageor an edge

    function moveLeft() {
        // remove the currently drawn tetremino
        undraw();
        // define what is the left edge
        const isAtLeftedge = current.some(index => (currentPosition + index)% width === 0)

        if(!isAtLeftedge) currentPosition -= 1

        if(current.some(index => sqaure[currentPosition + index].classList.contains('taken'))) {
            currentPosition +=1
        }

        draw()
    }








})