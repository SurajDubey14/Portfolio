function f1() {
    alert("Thank you for contacting us. We will contact you soon")
}

// hamburger
let hamburger = document.querySelector('.hamburger');
let demoNav = document.querySelector('.header-nav')
let main = document.querySelector('main ')
let flag = 0

hamburger.addEventListener('click', () => {
    if (flag == 0) {
        demoNav.style.display = 'block'
        // main.style.margin='40vh';
        // main.style.filter="blur(5px)"
        flag = 1
    }
    else {
        demoNav.style.display = 'none'
        // main.style.margin='0vh';
        // main.style.filter="blur(0px)"
        flag = 0
    }

})

var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Java Developer', 'Freelancer'],
    typeSpeed: 150,
});

// Scrolling Function
function scrollcontact(){
    const contact = document.querySelector(".contact");
    contact.scrollIntoView({behavior:'smooth'});
}
function scrollabout(){
    const about = document.querySelector(".about");
    about.scrollIntoView({behavior:'smooth'});
}
function scrollproject(){
    const contact = document.querySelector(".project");
    contact.scrollIntoView({behavior:'smooth'});
}
function scrollservices(){
    const service = document.querySelector(".service");
    service.scrollIntoView({behavior:'smooth'});
}

function scrolltop(){
    const head = document.querySelector(".header");
    head.scrollIntoView({behavior:'smooth'});
}