

let  setdata= async ()=>{

    let url="http://localhost:3000/RentCar"

    let res1 = await fetch(url,{method:"GET"})

    let data2 = await res1.json();

    console.log(data2)

    paginationdata(data2)
}  
 let searchdata1= async()=>{

    let getid =document.querySelector("#searchinp").value.toLowerCase()

    let url='http://localhost:3000/RentCar'
    let res = await fetch(url,{method:"GET"})
    let data = await res.json()
    console.log(data) 

    let filterdata = data.filter((e)=>{
        return e.Name.toLowerCase().includes(getid) || e.Car.toLowerCase().includes(getid)
    })
    paginationdata(filterdata)
} 


let paginationdata=(data)=>{
    $('#pagin').pagination({
        dataSource: data,
        pageSize: 5,
        showPageNumbers: true,
        showNavigator: true,
        callback: function(data, pagination) {
            searchh(data)
        }
    })
}

let searchh=(data)=>{
    let show = document.querySelector("#show1")
    show.innerHTML=""

    data.map((e)=>{
        show.innerHTML +=`
        <tr>
        <td>${e.Name}</td>
        <td>${e.Date}</td>
        <td>${e.Car}</td>
        <td>${e.Contact}</td>
        <td>${e.ReturnDate}</td>
         <td>${e.Licence}</td>
        <td onclick = "finaldata('${e.id}')">Cancel</td>
        <td onclick="up('${e.id}')">Update</td>
        </tr>
        `
    })

}

let finaldata = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}

let del=(id)=>{
    let url=`http://localhost:3000/RentCar/${id}`

    fetch(url,{method:"DELETE"})
}

// let  sendval=()=>{
    

//    let inpname = document.querySelector("#name").value
//    let inplocation = document.querySelector("#add").value
//    let inpcar = document.querySelector("#car3").value
//    let inplicence = document.querySelector("#licence").value
//    let inpdate = document.querySelector("#date").value
//    let inpredate1 = document.querySelector("#redate").value

let  senddate=()=>{
    

    let inpname = document.querySelector("#name1").value 
    let inpdate = document.querySelector("#date1").value
    let inpcar = document.querySelector("#car-type1").value
    let inpcont = document.querySelector("#contact1").value
    let inpredate1 = document.querySelector("#redate").value
    let inplicence = document.querySelector("#licence1").value



   let url="http://localhost:3000/RentCar"

   fetch(url,{method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify({
        // "Name":inpname,
        // "Location": inplocation,
        // "Car": inpcar,
        // "Licence":inplicence,
        // "Date":inpdate,
        // "ReturnDate":inpredate1

        "Name":inpname,
        "Date":inpdate,
        "Car": inpcar,
        "Contact":inpcont,
        "ReturnDate":inpredate1,
        "Licence":inplicence
    })
   
})
    location.href="indextable.html";
    return false;


}

let up = async (id) =>{
    let url=`http://localhost:3000/RentCar/${id}`

    let res = await fetch(url,{method:"GET"})
    let data = await res.json();

    console.log(data);

    let formdata = `
    <div id="nam">

    <p> Enter Name: <input type"text" id="upname" value="${data.Name}"></p>
    <p> Enter Date: <input type"date" id="update" value="${data.Date}"> </p>
    <p> Enter Car: <input type"text" id="upcar" value="${data.Car}"></p>
    <p>Enter Contact: <input type"text" id="upcontact" value="${data.Contact}"></p>
    <p> Enter ReturnDate: <input type"date" id="uprtdate" value="${data.ReturnDate}"></p>
    <p>Enter Licence: <input type"text" id="uplicence" value="${data.Licence}"></p>

    <p><input type="submit" value="submit"  id="submit1" onclick=" return finalupdate('${data.id}')"></p>
    
  </div>

    `
    document.querySelector("#formdata1").innerHTML=formdata
}

let finalupdate=(id)=>{

    let inpname = document.querySelector("#upname").value
    let inpdate = document.querySelector("#update").value
    let inpcar = document.querySelector("#upcar").value
    let inpcontct = document.querySelector("#upcontact").value
    let inpredate1 = document.querySelector("#uprtdate").value
    let inplicence = document.querySelector("#uplicence").value


    let url =`http://localhost:3000/RentCar/${id}`

    fetch(url,
        {method:"PUT",
            headers:{
                "Content-type":"application",
            },
            body:JSON.stringify({
                "Name":inpname,
                "Date":inpdate,
                "Car":inpcar,
                "Contact":inpcontct,
                "ReturnDate":inpredate1,
                "Licence":inplicence
            })
        }
    )
}



