

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
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open

        // The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
        // XMLHttpRequest.open(method, url[, async[, user[, password]]])
        // method  The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
        // url A DOMString representing the URL to send the request to.
        // A SYNC An optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send() method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown.




        xhr.open('GET', 'fakeurldata.txt', true); // if steps 3 and 4 are successful

        console.log(xhr.readyState) // should == 4
        console.log(xhr.status) // should be in 200-299 for successful transfer



        // step 3


        xhr.onload = function (){
            if (this.readyState === 4 && this.status === 200)
            document.getElementById("dataOutput").innerHTML = this.responseText;
                }
        
        xhr.open("GET", "fakeurldata.txt", true)
        xhr.send();
            }
        


});
