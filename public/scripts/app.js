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
let themeToggle = document.getElementById('themeToggle')
themeToggle.addEventListener('click', themeColorHandler)

console.log('k');