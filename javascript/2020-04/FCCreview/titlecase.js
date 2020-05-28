    function titleCase(str){
        str = str.toLowerCase()
        let newWord = "";

        for( i = 0; i < str.length; i++){
            newWord = newWord + str[i];
         

            if(str[i] == " "){
                newWord = newWord + str[i+1].toUpperCase();
                i++;
            }     
            }
             console.log(newWord);
        return str;
    }

    titleCase("I'm a little tea pot");
    