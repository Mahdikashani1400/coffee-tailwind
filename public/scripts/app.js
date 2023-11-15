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
    sideBarHandler(mobileNav, 'open', 'right')
    mobileNav.classList.add('open')
    $.body.classList.add('open')
})
markBtn.addEventListener('click', () => {
    sideBarHandler(mobileNav, 'close', 'right')
    mobileNav.classList.remove('open')
    $.body.classList.remove('open')


})

// mobileSubsetMenu

let subsetMenuContainer = $.querySelector('#mobileMenu > li.relative')
subsetMenuContainer.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('show')
})


// mobileUserBasket

let mobileUserBasket = $.getElementById('mobileUserBasket')
let closeUserBasket = $.getElementById('closeUserBasket')
closeUserBasket.addEventListener('click', () => {

    sideBarHandler(mobileUserBasket, 'close', 'left')
    mobileUserBasket.classList.remove('open')
    $.body.classList.remove('open')

})

let shoppingIconMobiles = $.querySelectorAll('.shopping-icon-mobile')
shoppingIconMobiles.forEach(icon => {
    icon.addEventListener('click', () => {
        sideBarHandler(mobileUserBasket, 'open', 'left')
        mobileUserBasket.classList.add('open')
        $.body.classList.add('open')
    })
})

// sideBarHandler

function sideBarHandler(elem, state, side) {

    if (state === 'close') {

        elem.style[side] = '-256px'

    } else {
        elem.style[side] = '0'

    }
}