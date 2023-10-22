function validateForm() {
  
  var phone = document.getElementById("phone");
  var date = document.getElementById("date");

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
  
  if (nrp.value.substring(0,4) != 5026)
  {
    alert("Hanya untuk mahasiswa SI" );
    nrp.focus();

    return false; //function ini ada return value, bukan void 
  }

  if(isNaN(date.value.substring(0,2)) == true && isNaN(date.value.substring(3,5)) == true && isNaN(date.value.substring(6)) == true)
  {
    alert("Enter date in format dd-mm-yy ")
    date.focus();
  }
  return true;

}




