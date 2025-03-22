//gsap lagane ke liye phele gsap cdjn lagana padta h sbse upr lgagana padhta h or uske bad agr hme scrolling lgana ho to scrolllgrigar lagana padtha h 


var t1 = gsap.timeline()
t1.from("#container img",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
}) 
t1.from("#container a",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
}) 
t1.from("#container input",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
}) 

t1.from("#ret h3",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
}) 
t1.from("#ret h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
}) 
t1.from("#ret a",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
}) 


//-------------------------car-fact-----------------------

gsap.from("#car-fact p",{
 x:500,   
 opacity:0,
 duration:2,
 scrollTrigger:{
    trigger:"#car-fact p",
    scroller:"body",
    // markers:true,
    start:"top 40%",
    end:"top 40%",
    scrub:3
}
})
gsap.from("#car-fact h1",{
    x:-500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-fact h1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
   })


//-------------------------car-fact2-----------------------   

gsap.from("#car-fact2 h6",{
    x:500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-fact2 h6",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
})  
gsap.from("#car-fact2 h1",{
    x:-500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-fact2 h1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
   }) 

//   -------------------------car-fact4-------------------------------------- 


gsap.from("#car-fact4 p",{
    x:500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-fact4 p",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
})  
gsap.from("#car-fact4 h1",{
    x:-500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-fact4 h1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
   }) 

//---------------------footar------------------

gsap.from("#footar #f1",{
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#footar #f1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#footar #f2",{
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#footar #f2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#footar #f3",{
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#footar #f3",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 40%",
        scrub:3
    }
})

//--------------------------------car-sec------------------------------

gsap.from("#car-sec",{
    x:-500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-sec",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
})

gsap.from("#car-sec2",{
    x:-500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-sec2",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
})
gsap.from("#car-sec3",{
    x:-500,   
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#car-sec3",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:3
    }
})



//--------------------------------car-sec------------------------------

gsap.to("#gif img",{
    x:700,
    duration:5,
    delay:1,
    repeat:-1
})
