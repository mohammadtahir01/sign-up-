

let senddate=()=>{

    let inpname = document.querySelector("#name1").value
    let inpdate = document.querySelector("#date1").value
    let inpcar = document.querySelector("#car-type1").value
    let inpcont = document.querySelector("#contact1").value
    let inpredate = document.querySelector("#redate").value
    let inplicence = document.querySelector("#licence1").value

    let nameerr1 = document.querySelector("#nameerr")
    let date1err = document.querySelector("#date1err")
    let carerr = document.querySelector("#carterr")
    let conterr = document.querySelector("#conterr")
    let redateerr = document.querySelector("#redateeerr")
    let licenceerr = document.querySelector("#licenceerr")
    

    if(inpname == ""){
        nameerr1.innerHTML="Please fil the name";
        nameerr1.style.color="red";
        return false
    }
    else if(inpdate == ""){
        
    }
}