function validateForm() {
    //let x = document.forms["myForm"]["fname"].value;
    var x = document.getElementById("fname");
    var nrp = document.getElementById("nrp");
    //bahwa yang dicek cukup yg invalid
    //lakukan per jenis valudasi, supaya user tau salahnya apa
    if (x.value == "") { //isian kosong, berarti text box tidak diisi apa apa
      alert("Nama harus diisi..");
      x.focus();
      return false; //function ini ada return value, bukan void 
      //stop, gak dikirim ke server
    }
    if (nrp.value == "") { //isian kosong, berarti text box tidak diisi apa apa
      alert("NRP harus diisi..");
      nrp.focus();
      return false; //function ini ada return value, bukan void 
      //stop, gak dikirim ke server
    }
    
    if (isNaN(nrp.value) == true)
    {
      alert("NRP harus berupa angka..");
      nrp.focus();
    
      return false; //function ini ada return value, bukan void 
    }
    //console.log(nrp.value.lenth)
    if (nrp.value.length != 10)
    {
      alert("Jumlah digit harus 10, Anda memasukkan " + nrp.value.length + "digit!" );
      nrp.focus();
      
      return false; //function ini ada return value, bukan void 
    }
    //5026221172
    //boleh diberi boleh tidak, karensa default funcftion adalah true. Pencegahan nilai 
    //ke false berfungsi supaya tidak jadi dikirimkan.
  
    if (nrp.value.substring(0,4) != 5026)
    {
      alert("Hanya untuk mahasiswa SI" );
      nrp.focus();
  
      return false; //function ini ada return value, bukan void 
    }
  
    if (nrp.value.substring(4,6) != 22 && nrp.value.substring(4,6) != 21)
    {
      alert("Hanya untuk angkatan 2022 & 2021" );
      nrp.focus();
    
      return false; //function ini ada return value, bukan void 
    }
    return true;
  }