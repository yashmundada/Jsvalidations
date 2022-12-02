
var passwordError = document.getElementById("message");
function verifyPassword() {
  
    var password = document.getElementById("pswd").value;
    var repassword = document.getElementById("re-pswd").value;
    //check empty password field
//     if(password == "") {
//        document.getElementById("message").innerHTML = "**Fill the password please!";
//        return false;
//     }
   
//    //minimum password length validation
//     else if(password.length < 8) {
//        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
//        return false;
//     }
  

//      if(password.length == 8) {
//        document.getElementById("message").innerHTML = "**confirm your password";
//        return false;
//     } 



    // ...........................................................................
   if (password !== repassword) {
        passwordError.innerHTML = "both password must be same";
        return false;
      }
      passwordError.innerHTML = 'valid';
      return true;
        }
// ..................................................................................



