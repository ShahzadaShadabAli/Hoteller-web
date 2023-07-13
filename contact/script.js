const navBar = document.querySelector('.navbar-1')
const navImg = document.querySelector('.nav-img')
const nav = document.querySelector('.navbar')
const left = document.querySelector('.left')
const lang = document.querySelector('.lang')
const fang = document.querySelector('.fang')
const btn = document.querySelector('.butn')
const upIcon = document.querySelector('.fa-chevron-up')
const loadingScr = document.querySelector('.loading')
let selectContainers = document.querySelectorAll(".select-container");
let selects = document.querySelectorAll(".select");
let input = document.getElementById("input");
let options = document.querySelectorAll(".select-container .option");

function changeNav() {
    console.log(window.scrollY)
    if (window.scrollY < 150) {
        upIcon.hidden = true
        navBar.classList.remove('change-nav')
        navImg.src = '../img/Screenshot (73).png'
        nav.classList.remove('navbar-light')
        nav.classList.add('navbar-dark')
        lang.classList.remove('lang-dark')
        fang.classList.remove('lang-dark')
        btn.classList.remove('buutn')

    } else {
        upIcon.hidden = false
        navBar.classList.add('change-nav')
        navImg.src = '../img/Screenshot (74).png'
        nav.classList.replace('navbar-dark','navbar-light')
        left.classList.add('text-light')
        lang.classList.add('lang-dark')
        fang.classList.add('lang-dark')
        btn.classList.add('buutn')
    }

}

// Event Listener
window.addEventListener('scroll', changeNav)
window.addEventListener('load', () => {
    loadingScr.style.display = "none"
})
upIcon.addEventListener('click', ()=> {
    window.scrollTo(0, 0)
})
