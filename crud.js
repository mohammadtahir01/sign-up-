

let  setdata= async ()=>{

    let url="http://localhost:3000/RentCar"

    let res1 = await fetch(url,{method:"GET"})

    let data2 = await res1.json();

    console.log(data2)

    searchh(data2)
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
    searchh(filterdata)
}   

let searchh=(data2)=>{
    let show = document.querySelector("#show1")
    show.innerHTML=""

    data2.map((e)=>{
        show.innerHTML +=`
        <tr>
        <td>${e.Name}</td>
        <td>${e.Location}</td>
        <td>${e.Car}</td>
        <td>${e.Licence}</td>
        <td>${e.Date}</td>
        <td>${e.ReturnDate}</td>
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

let  sendval=()=>{

   let inpname = document.querySelector("#name").value
   let inplocation = document.querySelector("#location").value
   let inpcar = document.querySelector("#car").value
   let inplicence = document.querySelector("#licence").value
   let inpdate = document.querySelector("#date").value
   let inpredate1 = document.querySelector("#redate").value


   let url="http://localhost:3000/RentCar"

   fetch(url,{method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify({
        "Name":inpname,
        "Location": inplocation,
        "Car": inpcar,
        "Licence":inplicence,
        "Date":inpdate,
        "ReturnDate":inpredate1
    })
   
})

location.href="indextable.html"
return false

}

let up = async (id) =>{
    let url=`http://localhost:3000/RentCar/${id}`

    let res = await fetch(url,{method:"GET"})
    let data = await res.json();

    console.log(data);

    let formdata = `
    <div id="nam">

    <p> Enter Name: <input type"text" id="upname" value="${data.Name}"></p>
    <p> Enter Location: <input type"text" id="uplocation" value="${data.Location}"> </p>
    <p> Enter Car: <input type"text" id="upcar" value="${data.Car}"></p>
    <p>Enter Licence: <input type"text" id="uplicence" value="${data.Licence}"></p>
    <p> Enter Data: <input type"text" id="update" value="${data.Date}"></p>
    <p> Enter ReturnDate: <input type"text" id="uprtdate" value="${data.ReturnDate}"></p>

    <p><input type="submit" value="submit"  id="submit1" onclick=" return finalupdate('${data.id}')"></p>
    
  </div>

    `
    document.querySelector("#formdata1").innerHTML=formdata
}

let finalupdate=(id)=>{

    let inpname = document.querySelector("#upname").value
    let inplocation = document.querySelector("#uplocation").value
    let inpcar = document.querySelector("#upcar").value
    let inplicence = document.querySelector("#uplicence").value
    let inpdate = document.querySelector("#update").value
    let inpredate1 = document.querySelector("#uprtdate").value


    let url =`http://localhost:3000/RentCar/${id}`

    fetch(url,
        {method:"PUT",
            headers:{
                "Content-type":"application",
            },
            body:JSON.stringify({
                "Name":inpname,
                "Location":inplocation,
                "Car":inpcar,
                "Licence":inplicence,
                "Date":inpdate,
                "ReturnDate":inpredate1
            })
        }
    )
}



