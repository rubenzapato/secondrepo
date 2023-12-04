const menuIcon =document.querySelector(".responsive_icon")
const menu_nav=document.querySelector("aside")

function addClassShow(){
    menu_nav.classList.toggle("show")
}

menuIcon.addEventListener("click",addClassShow)