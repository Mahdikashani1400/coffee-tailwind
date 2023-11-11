const $ = document
window.addEventListener('DOMContentLoaded', () => {
    themeColorHandler()

})

let stateMode = null
function themeColorHandler(e) {
    stateMode = localStorage.getItem('theme')

    if (stateMode === 'dark') {

        e ? (localStorage.theme = 'light') && (document.documentElement.classList.remove('dark')) : (document.documentElement.classList.add('dark'))



    } else {
        e ? (localStorage.theme = 'dark') && (document.documentElement.classList.add('dark')) : (document.documentElement.classList.remove('dark'))

    }
}
let themeToggles = document.querySelectorAll('.themeToggle')
themeToggles.forEach(themeToggle => {
    themeToggle.addEventListener('click', themeColorHandler)
})



// mobileNav

let mobileNav = $.getElementById('mobileNav')
let barsBtn = $.getElementById('barsBtn')
let markBtn = $.getElementById('markBtn')
barsBtn.addEventListener('click', () => {
    mobileNav.style.right = '0'
})
markBtn.addEventListener('click', () => {
    console.log('g');
    mobileNav.style.right = '-256px'
})

// mobileMenu

let subsetMenuContainer = $.querySelector('#mobileMenu > li.relative')
subsetMenuContainer.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('show')
})

