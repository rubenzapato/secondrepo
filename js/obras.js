const menuIcon =document.querySelector(".responsive_icon")
const menu_nav=document.querySelector("aside")
const main =document.querySelector("main")

function addClassShow(){
    menu_nav.classList.toggle("show")
    console.log("Da")
}
menuIcon.addEventListener("click",addClassShow)
console.log("menu_nav")

let red=100; 
let redValue=1
let green=150; 
let greenValue=1
let blue=200; 
let blueValue=1
let on =0; 
function changeColor(){
    if(red <= 200 && redValue===1){
        red+=2
    }else{
        redValue =0; 
    }
    if(green <=200 && greenValue ===1){
        green+=6
    }else{
        greenValue =0; 
    }
    if (blue <= 200 && blueValue ===1){
        blue++
    }else{
        blueValue=0; 
    }
    //change
    if(red>100 && redValue === 0){
        red--
    }else{
        redValue=1
    }
    if (green>100 && greenValue ===0){
        green-=2
    }else{
        greenValue=1; 
    }
    if(blue>100 && blueValue ===0){
        blue--
    }else{
        blueValue=1
    }
    main.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
    console.log(`rgb(${red}, ${green}, ${blue})`)
}






setInterval(changeColor,100)