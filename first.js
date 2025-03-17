




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

    else if(inpnumer.length !== 10 || inpnumer == ""){
        errnum.innerHTML="Please fil the number";
        errnum.style.color="red";
        return false

      }

    else if(!(inpemail.includes('@')) && (inpemail.includes('.com'))){
        erremail.innerHTML="Please fil the email";
        erremail.style.color="red";
        return false

      }

    else if(inppass.length <= 8){
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

   if(inpuser == localname && inppassword == localpass){
  
     location.href="index.html";
     return false;

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


function car(){
  let getval = document.querySelector("#list2");

  if(!getval) return;
  if(getval.style.display === "none" || getval.style.display === ""){
    getval.style.display = "block";
  }else{
    getval.style.display = "none";
  }

}
// let show;
function car4(){
  let getlist = document.querySelector("#car3")
  getlist.value="Rolls Royce";

  let setval = document.querySelector("#list2");
  setval.style.display = "none";
}

function car5(){
  let getlist = document.querySelector("#car3")
  getlist.value="BMW";

  let setval = document.querySelector("#list2");
  setval.style.display = "none";
}

function car6(){
  let getlist = document.querySelector("#car3")
  getlist.value="Audi";

  let setval = document.querySelector("#list2");
  setval.style.display = "none";
}

function addlocation(){
  let liststyle=document.querySelector("#list3");

  if(!liststyle) return;

  if(liststyle.style.display === "none" || liststyle.style.display === ""){
    liststyle.style.display = "flex";
  }else{
    liststyle.style.display = "none";
  }
}


function location1(){
  let getlocation = document.querySelector("#add");
  getlocation.value="Bhopal";
 
  let listnone = document.querySelector("#list3");
  listnone.style.display = "none";
}

function location12(){
  let getlocation = document.querySelector("#add");
  getlocation.value="Mp Nagar";
  
  let listnone = document.querySelector("#list3");
  listnone.style.display = "none";
}


function location13(){
  let getlocation = document.querySelector("#add");
  getlocation.value="Bihar";
  
  let listnone = document.querySelector("#list3");
  listnone.style.display = "none";
}


function downb(){
  let getdown = document.querySelector("#car-details");
  if(getdown.style.display==="none" || getdown.style.display===""){
  getdown.style.display="block";
}else{
  getdown.style.display="none";
}

}

function downb1(){
  let getdown1 = document.querySelector("#car-details1");

  if(getdown1.style.display==="none" || getdown1.style.display===""){
    getdown1.style.display="block";
  }else{
    getdown1.style.display="none";
  }
}


function downb2(){
  let downbget = document.querySelector("#car-details2");

  if(downbget.style.display === "none" || downbget.style.display === ""){
    downbget.style.display = "block";
  }else{
    downbget.style.display = "none";
  }
}

function downb3(){
  let downb3get = document.querySelector("#car-details3");

  if(downb3get.style.display === "none" || downb3get.style.display === ""){
    downb3get.style.display = "block";
  }else{
    downb3get.style.display = "none";
  }
}

function downb4(){
  let downb4get = document.querySelector("#car-details4");

  if(downb4get.style.display === "none" || downb4get.style.display === ""){
    downb4get.style.display = "block";
  }else{
    downb4get.style.display = "none";
  }
}

function downb5(){
  let downb5get = document.querySelector("#car-details5");

  if(downb5get.style.display === "none" || downb5get.style.display === ""){
    downb5get.style.display = "block";
  }else{
    downb5get.style.display = "none";
  }
}


let nav=()=>{

  if(localStorage.getItem("Name")){
  location.href="nav2.html"
  }
  else{
    // alert("please login / Or signup")
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Please Login/SignUp `,
      footer: 'Something went wrong!'
    });

  }
}
let logout=()=>{
  let getid1 = document.querySelector("#id1")
  if(getid1.style.display==="none" || getid1.style.display===" "){
    getid1.style.display="block"
    
  }else{
    getid1.style.display="none"
  }
  localStorage.clear();
 
}

let homefun=()=>{
  
  let setfun = document.querySelector("#id1")

  if(setfun.style.display==="none" || setfun.style.display===" "){
    setfun.style.display="block"
    
  }else{
    setfun.style.display="none"
  }
}