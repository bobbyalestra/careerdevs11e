

//  in this loop i am going to cyle through a nest array


let nestedArray = [ [12312, 324234, 324324, 12313, 657567,56765], [546568,32131456, "ARNEEZY", 4354575, 6578], ["bobby" , 9879, 987], [43324567 ]]


for (let i = 0; i < nestedArray.length; i++){
    for (let j = 0; j < nestedArray[i].length; j++){

        console.log(nestedArray[i][j])
    }
}