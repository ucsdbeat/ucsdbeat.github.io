console.log("THIS IS MAIN")

let nav = document.querySelector("nav.main-nav");
let navLinks = nav.querySelectorAll('.nav-item .nav-link');



console.log(nav);

window.addEventListener('scroll', function(){
    let links = (nav.querySelectorAll('.nav-link.nav-link-white').length > 0) ? nav.querySelectorAll('.nav-link.nav-link-white') : nav.querySelectorAll('.nav-link.nav-link-black');
    console.log(links);
    if(window.scrollY > 50) {
        loopThrough(links, 'nav-link-black', 'nav-link-white');
    } else {
        loopThrough(links, 'nav-link-white', 'nav-link-black');
    }
})

function loopThrough(links, addClassName, removeClassName) {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add(addClassName);
        links[i].classList.remove(removeClassName);
    }     
}