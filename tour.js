/* =====================================================
   TOUR DETAIL PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", function(){

const tabs=document.querySelectorAll(".tour-tabs a");

tabs.forEach(tab=>{

tab.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-120,

behavior:"smooth"

});

});

});

});



const sections=document.querySelectorAll(".tour-section");

const navLinks=document.querySelectorAll(".tour-tabs a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


const reveals=document.querySelectorAll(

".destination-card,.price-card,.highlight-item,.testimonial-card,.gallery-item,.timeline-item"

);

function reveal(){

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

const visible=window.innerHeight-100;

if(top<visible){

el.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();




const back=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

back.classList.add("show");

}else{

back.classList.remove("show");

}

});

back.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});






