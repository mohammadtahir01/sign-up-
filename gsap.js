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


gsap.to("#gif img",{
    x:800,
    duration:5,
    delay:1,
    repeat:-1
})
