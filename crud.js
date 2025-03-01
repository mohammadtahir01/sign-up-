

let  setdata= async ()=>{

    let url="http://localhost:3000/RentCar"

    let res1 = await fetch(url,{method:"GET"})

    let data2 = await res1.json();

    console.log(data2)

    let show = document.querySelector("#show1")

    data2.map((e)=>{
        show.innerHTML +=`
        <tr>
        <td>${e.Name}</td>
        <td>${e.Location}</td>
        <td>${e.Car}</td>
        <td>${e.Licence}</td>
        <td>${e.Date}</td>
        <td>${e.ReturnDate}</td>
        <td onclick = "del('${e.id}')">Cancel</td>
        <td onclick="up('${e.id}')">Update</td>
        </tr>
        `
    })

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
     Enter Name: <input type"text" id="upname" value="${data.Name}"> <br>
     Enter Location: <input type"text" id="upname" value="${data.Location}"> <br>
     Enter Car: <input type"text" id="upname" value="${data.Car}"> <br>
     Enter Licence: <input type"text" id="upname" value="${data.Licence}"> <br>
     Enter Data: <input type"text" id="upname" value="${data.Date}"> <br>
     Enter ReturnDate: <input type"text" id="upname" value="${data.ReturnDate}"> <br>

     <input type="submit" value="submit">
    


    `
    document.querySelector("#formdata1").innerHTML=formdata
}



