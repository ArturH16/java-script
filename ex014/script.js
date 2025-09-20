
function carregar() {
let hora = document.getElementById('hora')
let img = document.getElementById('foto')
let agora = new Date()
let horas = agora.getHours()
hora.innerHTML = `Agora são ${horas} horas`
if (horas >= 0 && horas < 12) {
    img.src = 'imagens/pexels-artur-roman-p.png'
    document.body.style.backgroundColor = '#C9B98A'
   
} else if (horas >=12 && horas < 18) {
    img.src = 'imagens/pexels-george-desipris-p.png'
    document.body.style.backgroundColor = '#b9846f'
} else {
    img.src = 'imagens/pexels-pixabay-m.png'
    document.body.style.backgroundColor = '#515154'
}
}
