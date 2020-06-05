

document.addEventListener('DOMContentLoaded', function (){

    document.getElementById('button').addEventListener("click", loadText)
    
    function loadText(){
        // alert(' i am a genie in a bottle why dont you Click me the right way')
    
        
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
        
        const xhr = new XMLHttpRequest();


        console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200 for successful transfer
    }


});
