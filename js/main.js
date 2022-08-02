
window.onscroll = function (){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 500){
        header.classList.add('nav_mod');

    }else if(scroll < 500){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu =document.getElementById("header");
nav=document.getElementById("nav");
function mostrar_menu(){
menu.classList.toggle('move_content');
nav.classList.toggle('move_nav');

}

//:::::::::::::::::::::::::::Dark Mode :::::::::::::::::::::::::::://
const btnSwitch=document.querySelector('#switch')
btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active');
})
//:::::::::::::::::::::::::::Dark Mode :::::::::::::::::::::::::::://

//:::::::::::::::::::::::::::Dark Mode :::::::::::::::::::::::::::://
//:::::::::::::::::::::::::::Dark Mode :::::::::::::::::::::::::::://


