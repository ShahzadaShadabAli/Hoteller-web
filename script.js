const navBar = document.querySelector('.navbar-1')
const navImg = document.querySelector('.nav-img')
const nav = document.querySelector('.navbar')
const left = document.querySelector('.left')
const lang = document.querySelector('.lang')
const fang = document.querySelector('.fang')
const btn = document.querySelector('.butn')
const upIcon = document.querySelector('.fa-chevron-up')
const loadingScr = document.querySelector('.loading')

const digitCon1 = document.querySelector('.stat1')
const digitCon2 = document.querySelector('.stat2')
const digitCon3 = document.querySelector('.stat3')

function changeNav() {
    console.log(window.scrollY)
    if (window.scrollY < 150) {
        upIcon.hidden = true
        navBar.classList.remove('change-nav')
        navImg.src = './img/Screenshot (73).png'
        nav.classList.remove('navbar-light')
        nav.classList.add('navbar-dark')
        lang.classList.remove('lang-dark')
        fang.classList.remove('lang-dark')
        btn.classList.remove('buutn')

    }
    else if (window.scrollY > 500 && window.scrollY < 550) {
        let digit1 = 0
        let counter1 = setInterval(() => {
            digit1++
            digitCon1.textContent = digit1
                if (digit1 >= 50) {
                    clearInterval(counter1)
                }
        }, 30)
        let digit2 = 0
          let counter2 = setInterval(() => {
            digit2++
            digitCon2.textContent = digit2
                if (digit2 >= 15) {
                    clearInterval(counter2)
                }
        }, 80)
        let digit3 = 0
          let counter3 = setInterval(() => {
            digit3++
            digitCon3.textContent = digit3
                if (digit3 >= 6) {
                    clearInterval(counter3)
                }
        }, 200)
    }
    else {
        upIcon.hidden = false
        navBar.classList.add('change-nav')
        navImg.src = './img/Screenshot (74).png'
        nav.classList.replace('navbar-dark', 'navbar-light')
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
upIcon.addEventListener('click', () => {
    window.scrollTo(0, 0)
})