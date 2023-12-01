const menuIcon =document.querySelector(".responsive_icon")
const menu_nav=document.querySelector("aside")

function addClassShow(){
    menu_nav.classList.toggle("show")
    console.log("Da")
}
menuIcon.addEventListener("click",addClassShow)
console.log("menu_nav")