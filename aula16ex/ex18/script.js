let nums = []
let res = document.getElementById('res')
let botao_adicionar = document.getElementById('adicionar_botao')
botao_adicionar.addEventListener('click',adicionar)
let elem = 0
function adicionar() {


    res.innerHTML = ''
    let tab = document.getElementById('tab_select')
    let numerotxt = document.getElementById('numero')
    if (numerotxt.value.length == 0 || (numerotxt.value < 1  || numerotxt.value > 100 ) || nums.indexOf(Number(numerotxt.value)) != -1 ) {
        alert('Valor inválido, fora da faixa de valores ou já inserido na lista!')
    } else {
        let num = Number(numerotxt.value)
        nums.push(num)
        let opcao = document.createElement('option')
        opcao.innerHTML += `Valor ${num} adicionado!`
        tab.appendChild(opcao)
        elem += 1
        numerotxt.value = ''
        numerotxt.focus()
    }
        
    


    

let botao_finalizar = document.getElementById('finalizar_botao')
botao_finalizar.addEventListener('click',finalizar)

function finalizar() {
    if (elem == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maior = 0
        let menor = 101
        let soma_val = 0
        for (let i of nums) {
            if (i > maior) {
                maior = i
            } if (i <= menor) {
                menor = i
            }
            soma_val += i
        }
        res.innerHTML = `Ao todo, foram adicionados<strong> ${nums.length}</strong> <br>`
        res.innerHTML += `O maior valor digitado foi <strong>${maior}</strong> <br>`
        res.innerHTML += `O menor valor informado foi <strong>${menor}</strong> <br>`
        res.innerHTML += `Somando todos os valores, temos<strong> ${soma_val}</strong> <br>`
        res.innerHTML += `A média dos valores digitados foi <strong>${soma_val / nums.length}</strong>`
        
    }

}

}




/* SOLUÇÃO GUANABARA
let num = document.querySelector(input#num)
let lista = document.querySelector(div#res)
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
    return true } else {
        return false}
}

function inLista(n,l) {
    if l.indexOf(Number(n)) != -1 {
    return true } else {
        return false } 
        }

function adicionar() {
if (isNumero(num.value) && !inLista(num.value,valores)) {
    valores.push(Number(num.value))
    let item = document.createelement('option')
    item.text = `Valor ${num.value} adicionado`
    item.appendChild(item) 
    res.innerHTML = ''} else {
      'window.alert('Valor inválido ou já encontrado na lista)  }
      num.value = ''
      num.focus()
}

function finalizar() {
if (valores.length == 0) {
window.alert('Adicione valores antes de finalizar!)
} else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
    soma += valores[pos]
    if (valores[pos] > maior) {
    maior = valores[pos]} if (valores[pos] < menor) {
    menor = valores[pos]}
    }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<pAo todo, temos %{tot} valores cadastrados</p>`
    res.innerHTML += `<pO maior valor digitado foi %{maior} </p>`
    res.innerHTML += `<pO menor valor digitado foi %{menor}</p>`
    res.innerHTML += `<pA média dos valores  digitados é %{media}</p>`
}

*/