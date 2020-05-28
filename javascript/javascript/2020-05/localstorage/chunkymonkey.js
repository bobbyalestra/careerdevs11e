function chunkyArrayInGroup(arr, size){
    let chunkedArray = [];
    let tempArray = [...arr]// tempArray is an exact replica of arr
    for(i = 0; i < arr.length/size; i++){
        chunkedArray.push(tempArray.splice(0, size));
    }
    console.log(tempArray);
    console.log(chunkedArray);

}
chunkyArrayInGroup([7, 3, 11, 21, 9], 2)

function chunkyArrayInGroup02(arr, size){
    const chunckArray = [];
    let i = 0;
    while (i <arr.length )
    chunckArray.push(arr.slice(i, i + size));
    i += size
}

chunkyArrayInGroup02([7, 3, 11, 21, 9, 8, 12, 77, 69, 88], 4)

