var nameError = document.getElementById("name-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
      nameError.innerHTML = "name is required";
      
      return false;
    }
    if (!name.match(/^[A-Za-z]*\s{2}[A-Za-z]*$/)) {
      nameError.innerHTML = "write full name";
      return false;
    }
    nameError.innerHTML = 'valid';
    return true;
  }