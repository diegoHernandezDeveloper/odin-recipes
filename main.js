const btn = document.querySelector('button')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const main = document.querySelector('main')



btn.addEventListener('click', toggleDarkMode)

function toggleDarkMode() {
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
    main.classList.toggle('darkMain')
    btn.classList.toggle('darkBtn')
   
}