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
          if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || contagemtxt.value.length == 0) {
        alert('FALTAM DADOS!')
        resultado.innerHTML = 'IMPOSSÍVEL CONTAR!'
      } if (contagem <= 0) {
        alert('PASSO INVÁLIDO. CONSIDERANDO PASSO = 1')
        if (inicio < fim) {
          for (let i = inicio ; i <= fim; i ++ ) {
        resultado.innerHTML += `${i}     &#X1F449;`
    }
        } else {
          for (let i = inicio ; i >= fim; i -- ) {
        resultado.innerHTML += `${i}     &#X1F449;`
    }
    
        } resultado.innerHTML += `&#X1F3C1;`
          

      }
        
     else {
      //  CONTAGEM CRESCENTE
      if (inicio < fim) {
        for (let i = inicio ; i <= fim; i += contagem ) {
        resultado.innerHTML += `${i}     &#X1F449;`
    } 

      } else {
        //CONTAGEM DECRESCENTE
        for (let i = inicio ; i >= fim; i -= contagem ) {
        resultado.innerHTML += `${i}     &#X1F449;`
    }
      }
          
    resultado.innerHTML += `&#X1F3C1;`
    }
  

    }

    
   
  




