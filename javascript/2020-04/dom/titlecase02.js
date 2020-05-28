function titleCase(str){
    let array = str.toLowerCase().split(' ');
    let newSentence = "";
    for(i = 0; i < array.length; i++){
        newSentence += array[i][0].toUpperCase() + array[i].substr(1) + " "; 
    }   
    console.log(newSentence)
    return str;
}
titleCase("I'm a little tea pot");
