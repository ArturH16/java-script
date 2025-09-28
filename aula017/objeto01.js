let amigos = {nome: 'Neymar', idade: 34, sexo: 'Santista', ganharCopa(n) {
if (n == 'Neymar') {
    return this.felicidade = false
} else {
    return this.felicidade=  true
}
}, felicidade: true }
amigos.ganharCopa('Neymar')
console.log(amigos.felicidade)
