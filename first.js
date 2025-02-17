let change=()=>{
    let show = document.querySelector("#log-n");
    let show1 = document.querySelector("#sig-n");

    if(show == "gray"){
        show.style.color="black";
        show.style.background ="#6f2da8";
    }
    else if(show1 == "#6f2da8"){
        show1.style.color="black";
        show1.style.background ="gray";
    }
  
    // show.style.border="1px solid gray";
}
