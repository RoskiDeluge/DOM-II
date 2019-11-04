// Your code goes here
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.fontFamily = "Impact";
    })
})

navItems.forEach((item) => {
    item.addEventListener("mouseleave", () => {
        item.style.fontFamily = "Times New Roman";
    })
})

