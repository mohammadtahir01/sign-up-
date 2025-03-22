

// let senddate=()=>{

//     let inpname = document.querySelector("#name1").value
//     let inpdate = document.querySelector("#date1").value
//     let inpcar = document.querySelector("#car-type1").value
//     let inpcont = document.querySelector("#contact1").value
//     let inpredate = document.querySelector("#redate").value
//     let inplicence = document.querySelector("#licence1").value

//     let nameerr1 = document.querySelector("#nameerr")
//     let date1err = document.querySelector("#date1err")
//     let carerr = document.querySelector("#carterr")
//     let conterr = document.querySelector("#conterr")
//     let redateerr = document.querySelector("#redateeerr")
//     let licenceerr = document.querySelector("#licenceerr")
    

//     if(inpname == ""){
//         nameerr1.innerHTML="Please fil the name";
//         nameerr1.style.color="red";
//         return false
//     }
//     else if(inpdate == ""){
//         date1err.innerHTML="Please fil the Date";
//         date1err.style.color="red";
//         // date1err.innerHTML=" ";
//         return false
//     }
//     else if(inpcar == ""){
//         carerr.innerHTML="Please fil the car name";
//         carerr.style.color="red";
//         return false
//     }
//     else if(inpcont == "" || inpcont.length < 10){
//         conterr.innerHTML="less than number of 10";
//         conterr.style.color="red";
//         return false
//     }
//     else if(inpredate == ""){
//         redateerr.innerHTML="Please fil the Date";
//         redateerr.style.color="red";
//         // date1err.innerHTML=" ";
//         return false
//     }
//     else if(inplicence == "" && inplicence.match([/ 1234567890 /]) && inplicence.match([ / !@#$%^&*()_-+ / ]) && inplicence.match([/a-z/]) && inplicence.match([/A-Z/])){
//         licenceerr.innerHTML="Use this formate abc-123";
//         licenceerr.style.color="red";
//         // date1err.innerHTML=" ";
//         return false
//     }

//     location.href="indextable.html"
//     return false

// }