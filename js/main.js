const menuIcon =document.querySelector(".responsive_icon")
const menu_nav=document.querySelector("aside")

function addClassShow(){
    menu_nav.classList.toggle("show")
}

menuIcon.addEventListener("click",addClassShow)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6NxkNVjOlEmH5J-GeqAAq9NEQKnwOq7I",
  authDomain: "calatrava-3dd49.firebaseapp.com",
  projectId: "calatrava-3dd49",
  storageBucket: "calatrava-3dd49.appspot.com",
  messagingSenderId: "80253374570",
  appId: "1:80253374570:web:08c9521e8e797403fbfa13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);