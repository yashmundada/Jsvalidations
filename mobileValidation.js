// function myfun(){
//     var a =document.getElementById("mobilenumber").value;
//     if (a=="") 
//     {
//     document.getElementById("msg").innerHTML="please fill field";
//     return false;    
//     }
//     if(isNaN(a)){
//         document.getElementById("msg").innerHTML="only no. are allowed";
//     return false;  
//     }
//     if(a.length<10){
//         document.getElementById("msg").innerHTML="mobile number must be 10 digit";
//     return false;  
//     }
//     if(a.length>10){
//         document.getElementById("msg").innerHTML="mobile number must be 10 digit";
//     return false;}
//     if((a.charAt(0)!=9) && (a.charAt(0)!=8)&& (a.charAt(0)!=7)){
//         document.getElementById("msg").innerHTML="no. must start with 9,8,7";
//     return false;
// }
// document.innerHTML='valid';
// return true;}
// ................................................................................................

var phoneError= document.getElementById('msg');

function validatePhone() {
    var phone = document.getElementById("mobilenumber").value;
    if (phone.length == 0) {
      phoneError.innerHTML = "phone no. is required";
      return false;
    }
    if (isNaN(phone)) {
        phoneError.innerHTML = "only digit";
        return false;
      }
    if ((phone.charAt(0)!=9) && (phone.charAt(0)!=8)&& (phone.charAt(0)!=7)) {
        phoneError.innerHTML = "Number must start with 9,8,7";
        return false;
      }
   
    
    if (phone.length !== 10) {
      phoneError.innerHTML = "phone no.should be 10 digit";
      return false;
    }
    
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }