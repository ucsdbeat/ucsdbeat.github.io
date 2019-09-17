console.log("THIS IS MAIN")

let nav = document.querySelector("nav.main-nav");
let navLinks = nav.querySelectorAll('.nav-item .nav-link');



console.log(nav);
window.addEventListener('scroll', function(){
    var active = nav.querySelector(".nav-item.active .nav-link");
    if(this.window.scrollY > 50) {
        nav.style.backgroundColor = "#fff";  
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = "#000";
        }
        
    } else if(this.window.scrollY < 50) {
        nav.style.backgroundColor = "transparent";   
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].style.color = "#fff";
        }    
    }
    if(this.window.scrollY > 100) {
        nav.style.maxHeight = "8%";
    }else {
        nav.style.maxHeight = "100%";
    }
    active.style.color = "#FFDB3F"; 
})