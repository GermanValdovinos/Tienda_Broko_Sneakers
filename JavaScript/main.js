//  * Titulo Pestaña
let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = `¡No te vayas! Regresa 😭`
})

window.addEventListener('focus', () => {
    document.title = previousTitle
})