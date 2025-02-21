
VANTA.NET({
  el: "#ani",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x6262ab,
  backgroundColor: 0x9080d,
  points: 20.00,
  maxDistance: 30.00,
  spacing: 20.00
})




let set=()=>{
    let inpname = document.querySelector("#name").value;
    let inpnumer = document.querySelector("#num").value;
    let inpemail = document.querySelector("#Email").value;
    let inppass = document.querySelector("#pass").value;

    let errname = document.querySelector("#err1");
    let errnum = document.querySelector("#err2");
    let erremail = document.querySelector("#err3");
    let errpass = document.querySelector("#err4");

    if(inpname == ""){
        errname.innerHTML="Please fil the name";
        errname.style.color="red";
        return false
    }

    if(inpnumer.length !== 10 || inpnumer == ""){
        errnum.innerHTML="Please fil the number";
        errnum.style.color="red";
        return false

    }

    if(!(inpemail.includes('@')) && (inpemail.includes('.com'))){
        erremail.innerHTML="Please fil the email";
        erremail.style.color="red";
        return false

    }

    if(inppass.length >= 8){
        errpass.innerHTML="Please fil the password";
        errpass.style.color="red";
        return false

    }


    localStorage.setItem("Name", inpname);
    localStorage.setItem("Number", inpnumer);
    localStorage.setItem("Email", inpemail);
    localStorage.setItem("Password", inppass);

    location.href="login2.html";
    return false;
}

//--------------------------Singnup has end-------------------------

let set2=()=>{
 let inpuser = document.querySelector("#name1").value;
 let inppassword = document.querySelector("#pass1").value;

 let erruser = document.querySelector("#erruser1");
 let errpassword1 = document.querySelector("#errpassword");


  if(inpuser == ""){
    erruser.innerHTML="Please fil the name";
    erruser.style.color="red";
    return false

  }

  if(inppassword == "" && inppassword.length >= 8){
    errpassword1.innerHTML="Please fil the pasword";
    errpassword1.style.color="red";
    return false

   }


   let localname = localStorage.getItem("Name");
   let localpass = localStorage.getItem("Password");

   if(localname==localname && localpass==localpass){
     location.href="rentcar.html";
     return false

   }else{
    alert("invalid name or password");
   }
    return false;

}


function home1(){
  let text1 = document.querySelector("#list");
  
  if(!text1) return;
  if(text1.style.display === "none" || text1.style.display === ""){
    text1.style.display = "block"; 
  }else{
    text1.style.display = "none";
  }
}