
//taget icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections

window.onscroll = () => {
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


let image = document.querySelector('.img-2')

setInterval(() => {


    if (image.style.opacity == 0) {
        image.style.opacity = 1
    } else {
        image.style.opacity = 0
    }


}, 3000)