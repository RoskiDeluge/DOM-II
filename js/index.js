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

imgs.forEach((i) => {
    i.addEventListener("keydown", () => {
        i.style.display = "none";
    })
})


// imgs.addEventListener("keydown", () => {
//     imgs.style.display = "none";
// })



