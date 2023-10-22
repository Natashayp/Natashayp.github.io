function validateForm() {
  
  var phone = document.getElementById("phone");

  if (isNaN(phone.value) == true)
  {
    alert("Enter a valid phone number");
    phone.focus();
  
    return false; 
  }

  
  if (phone.value.length <= 9)
  {
    alert("Enter a valid phone number (min. 10 digits)"  );
    phone.focus();
    
    return false;
  }
  
}
