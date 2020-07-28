fill(17, 0, 255);

// a handy dandy ruler across the top
let x = 0;

while ( x < 350) {
   
text(x, x, 10); 
x += 50;
}


let y = 0;

while ( y < 350){
    
    text(y, 0, y);
    y += 50; 
}
