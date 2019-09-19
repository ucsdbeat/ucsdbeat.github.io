console.log("THIS IS MAIN")

let nav = document.querySelector("nav.main-nav");
let navLinks = nav.querySelectorAll('.nav-item .nav-link');

window.addEventListener('scroll', function(){
    let links = (nav.querySelectorAll('.nav-link.nav-link-white').length > 0) ? nav.querySelectorAll('.nav-link.nav-link-white') : nav.querySelectorAll('.nav-link.nav-link-black');
    if(window.scrollY > 50) {
        loopThroughAndChangeFont(links, 'nav-link-black', 'nav-link-white');
        changeBackgoundColor(nav, 'main-nav-white', 'main-nav-transparent');
    } else {
        loopThroughAndChangeFont(links, 'nav-link-white', 'nav-link-black');
        changeBackgoundColor(nav, 'main-nav-transparent', 'main-nav-white');
    }
})

function loopThroughAndChangeFont(links, addClassName, removeClassName) {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add(addClassName);
        links[i].classList.remove(removeClassName);
    }     
}

function changeBackgoundColor (nav, addName, removeName) { 
    nav.classList.add(addName)
    nav.classList.remove(removeName)
}


let menu = document.querySelector('button.hamburger');

menu.addEventListener('click', function() {
    menu.classList.toggle('isActive');
})