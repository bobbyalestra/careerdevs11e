

function createEmailPw (){
    localStorage.setItem('emails', document.getElementById('email').value);
    document.getElementById("email").innerText = localStorage.getItem('emails');

    localStorage.setItem('creditcard', document.getElementById('password').value);
    document.getElementById("password").innerText = localStorage.getItem('creditcard');
}
document.getElementById("email").innerText = localStorage.getItem('emails');

document.getElementById("password").innerText = localStorage.getItem('creditcard');