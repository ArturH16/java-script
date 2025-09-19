let idade = 30
if (idade < 16) {
    console.log('NÃO PODE VOTAR')
} else {
    if (idade < 18 || idade >= 65) {
        console.log('VOTO FACULTATIVO')
    
    } else {
        console.log('VOTO OBRIGATÓRIO')
    }
}