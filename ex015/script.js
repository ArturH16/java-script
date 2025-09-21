
let botao = document.getElementById('confirmacao')
botao.addEventListener('click',mostrar)
function mostrar() {
let resultado = document.getElementById('res')
let txtano = document.getElementById('ano')
let ano = Number(txtano.value)
let ano_atual = new Date().getFullYear()

if(ano > ano_atual || txtano.value.length == 0) {
    resultado.innerHTML = 'Esse ano não é aceito pelo sistema!'
}  else {
    let sexo = document.getElementsByName('sex')
    let idade = ano_atual - ano
    let genero = ''
    if (sexo[0].checked) {
        genero = 'Homem'
    } else {
        genero = 'Mulher'
    } if (genero == 'Homem') {
        if (idade <= 65 && idade >= 18) {
            resultado.innerHTML = `<p>Detectamos um homem de ${idade} anos</p> <p> <img src = 'imagens/adulto-p.png'> </p>`
        } else if (idade > 65) {
            resultado.innerHTML = `<p>Detectamos um homem de ${idade} anos</p> <p> <img src = 'imagens/idoso-p.png'> </p>`
        } else {
            resultado.innerHTML = `<p>Detectamos um homem de ${idade} anos</p> <p> <img src = 'imagens/criança-m-p.png'> </p>`
        } 
    
    } else {
        if (idade <= 65 && idade >= 18) {
            resultado.innerHTML = `<p>Detectamos uma mulher de ${idade} anos</p> <p> <img src = 'imagens/adulta-p.png'> </p>`
        } else if (idade > 65) {
            resultado.innerHTML = `<p>Detectamos uma mulher de ${idade} anos</p> <p> <img src = 'imagens/idosa-p.png'> </p>`
        } else {
            resultado.innerHTML = `<p>Detectamos uma mulher de ${idade} anos</p> <p> <img src = 'imagens/crianca-f-p.png'> </p>`

    }
  
} 
    }
}



