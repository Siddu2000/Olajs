let btn1=document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    let dist=prompt("enter the distance of ride")
    let f=document.getElementById("f")
    f.innerText="6*"+dist
    let i1=document.getElementById("i1")
    i1.innerText=6*dist
})
let btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    let dist=prompt("enter the distance of ride")
    let g=document.getElementById("g")
    g.innerText="9*"+dist
    let i2=document.getElementById("i2")
    i2.innerText=9*dist
})
let btn3=document.getElementById("btn3")
btn3.addEventListener("click",()=>{
    let dist=prompt("enter the distance of ride")
    let h=document.getElementById("h")
    h.innerText="14*"+dist
    let i3=document.getElementById("i3")
    i3.innerText=14*dist
})