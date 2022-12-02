var emailError= document.getElementById('email-error');

function validateEmail(){
    var email= document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML='email is required';
        return false;
    }
    if(!email.match(  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML='Email invalid';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}


