const a = document.getElementById('key')
const s = document.getElementById('key')
const d = document.getElementById('key')

addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        cambiarColor(a, 'pink')
        console.log('tecla a')
    } else if (event.key === 's') {
        cambiarColor(a, 'orange')
        console.log('tecla s')
    } else if (event.key === 'd') {
        cambiarColor(a, '#87CEEB')
        console.log('tecla d')
    }
})

function cambiarColor(elmento, color) {
    elmento.style.backgroundColor = color;
}