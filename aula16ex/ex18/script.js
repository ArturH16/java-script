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



*/