//Método toggle
//Al elemento que tiene este metodo va a estar en 
//false y cuando yo lo llame lo pasa a verdadero
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco")
})