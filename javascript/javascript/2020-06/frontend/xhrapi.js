

document.addEventListener('DOMContentLoaded', function (){

    document.getElementById('button').addEventListener("click", loadText)
    
    function loadText(){
        // alert(' i am a genie in a bottle why dont you Click me the right way')
    
        
      
        // 1 step number 1 in XHR API Process
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        const xhr = new XMLHttpRequest();




        // troubleshooting
        console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200-299 for successful transfer


        // step number 2

        


    }


});
