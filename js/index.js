// Your code goes here
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.fontFamily = "Impact";
        item.style.fontSize = "2.5rem"
    })
})

navItems.forEach((item) => {
    item.addEventListener("mouseleave", () => {
        item.style.fontFamily = "Times New Roman";
    })
})

const mainImg = document.querySelector('.intro img');

mainImg.addEventListener("dblclick", () => {
    mainImg.src = "https://i.imgur.com/oDkEQr6.png?1";
    mainImg.style.height = "25rem";
    mainImg.style.width = "100%"
})

const logo = document.querySelector('.logo-heading');

logo.addEventListener("mousedown", () => {
    logo.style.fontFamily = "Impact";
    logo.style.fontSize = "10rem"
})

logo.addEventListener("mouseup", () => {
    logo.style.fontFamily = "Indie Flower";
    logo.style.fontSize = "5rem"
})

const imgs = document.querySelectorAll('img');
// console.log(imgs);

imgs.forEach((i) => {
    i.addEventListener("keydown", () => {
        i.style.display = "none";
    })
})

const textContent = document.querySelector('.text-content');
textContent.addEventListener("click", () => {
    textContent.style.backgroundColor = "blue";
    textContent.style.borderRadius = "1rem";
    textContent.style.padding = "2rem 2rem";
})

const contentImg = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    contentImg.src = "https://images.unsplash.com/photo-1572977082357-779e44868cb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
})

const bodyBlank = document.querySelector('body');
window.addEventListener('load', () => {
    bodyBlank.style.backgroundColor = "lightblue";
})

const btnFocus = document.querySelector('.btn');
window.addEventListener("focus", () => {
    btnFocus.style.backgroundColor = "pink";
})

// stop propagation

const contentBg = document.querySelector('.content-pick');
contentBg.addEventListener("click", () => {
    contentBg.style.backgroundColor = "lightgreen";
})

const destBg = document.querySelector('.destination');
destBg.addEventListener("click", (event) => {
    destBg.style.backgroundColor = "turquoise";
    destBg.style.padding = "1rem 1rem";
    destBg.style.borderRadius = "1rem";
    event.stopPropagation();
})

// prevent default

const stopRefresh = document.querySelectorAll('.nav-link');
stopRefresh.forEach((link) => {
    link.addEventListener("click", (event) => {
        console.log('clicked link')
        event.preventDefault();
    })
})









