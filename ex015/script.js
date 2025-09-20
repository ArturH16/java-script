
let botao = document.getElementById('confirmacao')
botao.addEventListener('click',mostrar)
function mostrar() {
let resultado = document.getElementById('res')
let txtano = document.getElementById('ano')
let ano = Number(txtano.value)
let sexoM = document.getElementById('sexom').value
let sexof = document.getElementById('sexof').value
let ano_atual = new Date().getFullYear()

if(ano > ano_atual) {
    resultado.innerHTML = 'Esse ano não é aceito pelo sistema!'
}  else {
    if (ano_atual - 18 == ano) {
        resultado.innerHTML = `Detectamos uma mulher de ${ano_atual - ano} anos <br>`
        resultado.innerHTML += `<img src='imagens/adulta.png'>`
    }
}
}



