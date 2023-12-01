const menuIcon =document.querySelector(".resposive_icon")
const menu_nav=document.querySelector("aside")

function addClassShow(){
    menu_nav.classList.toggle("show")
}

menuIcon.addEventListener("click",addClassShow)
