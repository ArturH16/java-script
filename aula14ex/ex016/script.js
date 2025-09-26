let botao = document.getElementById('contando')
botao.addEventListener('click',contando)
function contando() {
    let resultado = document.getElementById('res')
    let iniciotxt = document.getElementById('inicio')
    let fimtxt = document.getElementById('fim')
    let contagemtxt = document.getElementById('passo')
    let inicio = Number(iniciotxt.value)
    let fim = Number(fimtxt.value)
    let contagem = Number(contagemtxt.value)
    resultado.innerHTML = '<p>Contando</p>'
    if (contagem == 0) {
        alert('PASSO INVÁLIDO. CONSIDERANDO PASSO = 1')
          for (let i = inicio ; i <= fim; i ++ ) {
        resultado.innerHTML += `${i}     &#X1F449;`
    }
    resultado.innerHTML += `&#X1F3C1;`
    } else {
          for (let i = inicio ; i <= fim; i += contagem ) {
        resultado.innerHTML += `${i}     &#X1F449;`
    }
    resultado.innerHTML += `&#X1F3C1;`
    }
  



}
