var mainImg = document.querySelector(".main-img");

let width = window.innerWidth;

if (width <= 990) {
    mainImg.src = "./img/illustration-sign-up-mobile.svg"
} else if (width > 990) {
    mainImg.src = "./img/illustration-sign-up-desktop.svg"
}

document.body.onresize = function() {

    if (document.body.clientWidth <= 973) {
        
        mainImg.src = "./img/illustration-sign-up-mobile.svg"

    } else if (document.body.clientWidth > 973) {

        mainImg.src = "./img/illustration-sign-up-desktop.svg"
    }

 }