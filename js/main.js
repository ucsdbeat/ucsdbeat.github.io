let nav = document.querySelector("nav.main-nav");
let navLinks = nav.querySelectorAll('.nav-item .nav-link');
let menu = document.querySelector('button.hamburger');

window.addEventListener('scroll', function(){
    let links = (nav.querySelectorAll('.nav-link.nav-link-white').length > 0) ? nav.querySelectorAll('.nav-link.nav-link-white') : nav.querySelectorAll('.nav-link.nav-link-black');
    if(window.scrollY > 50 && !links[0].classList.contains('nav-link-black')) {
        menu.style.marginBottom = "25px";
        loopThroughAndChangeFont(links, 'nav-link-black');
        changeBackgoundColor(nav, 'main-nav-transparent');
    } else if (window.scrollY <= 50 && links[0].classList.contains('nav-link-black')){
        loopThroughAndChangeFont(links, 'nav-link-black', 'r');
        changeBackgoundColor(nav, 'main-nav-transparent');
        menu.style.marginBottom = "0px";
    }
})

function loopThroughAndChangeFont(links, className, action) {
    for (let i = 0; i < links.length; i++) {
        if(action == 'r') {
            links[i].classList.remove(className);
        } else { 
            links[i].classList.add(className);
        }
    }     
}

function changeBackgoundColor (nav, className) { 
    nav.classList.toggle(className);
}


menu.addEventListener('click', function() {
    console.log("asdfadf")
    menu.classList.toggle('is-active');
    menu.parentNode.classList.toggle('nav-background');
    menu.classList.toggle('w');
    menu.querySelector(".hamburger-inner").classList.toggle('w');
    // if(menu.classList.contains('is-active')) {
    //     console.log("div parent button: ", menu.parentNode);
       
    // } else {

    // }

})