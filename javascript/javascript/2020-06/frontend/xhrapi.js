

document.addEventListener('DOMContentLoaded', function (){

    document.getElementById('button').addEventListener("click", loadText)
    
    function loadText(){
        // alert(' i am a genie in a bottle why dont you Click me the right way')
    
        
      
        // 1 step number 1 in XHR API Process
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        const xhr = new XMLHttpRequest();




        // troubleshooting
        console.log('1. xhr = new')
        console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200-299 for successful transfer
        console.log('------------')

        // step number 2
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open

        // The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
        // XMLHttpRequest.open(method, url[, async[, user[, password]]])
        // method  The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
        // url A DOMString representing the URL to send the request to.
        // A SYNC An optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send() method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown.




        xhr.open('GET', 'https://api.github.com/users', true); // if steps 3 and 4 are successful
        console.log('2. xhr.open')
        console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200-299 for successful transfer
        console.log('------------')


        // step 3


        xhr.onload = function (){
            if (this.readyState === 4 && this.status === 200){
                const responseJSON = JSON.parse(this.responseText)
            
                console.log('3. xhr.onload')
            console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200-299 for successful tran
            console.log('------------')
                console.log(responseJSON)

                html = `<ul><li>${responseJSON[0].login} </li></ul>`
                // wil display the first index of and the user name
            document.getElementById("dataOutput").innerHTML = html;

                


                } else if (this.status === 404){
                document.getElementById('dataOutput').innerText = "404 Error File not Found"
            }
        
        }
        xhr.send();



        console.log('4. ')
        console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200-299 for successful tran
        console.log(xhr.responseText)
        console.log('------------')

    }

});
