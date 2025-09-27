let botao = document.getElementById('tabuada_botao')
botao.addEventListener('click',tabuada)
function tabuada() {
    let tab = document.getElementById('tabuada_sel')
    let numtxt = document.getElementById('numero')
    if (numtxt.value.length == 0) {
        alert('INSIRA UM VALOR VÁLIDO, POR FAVOR')
    } else {
        let resultado = document.getElementById('res')
        let num = Number(numtxt.value)
        resultado.innerHTML = `Tabuada do ${num}: `
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i ++ ) {
            let item = document.createElement('option')
            item.text += `${num} x ${i} = ${num * i}`
            tab.appendChild(item)
        }
    }
}