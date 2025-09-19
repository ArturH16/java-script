let agora = new Date()
let hora = agora.getHours()
console.log(`São ${hora} horas`)
if (hora < 12) {
    if (hora == 0 || hora >= 1 && hora < 6) {
        console.log('BOA MADRUGADA')
    } else {
        console.log('BOM DIA')
    }
} else {
    if (hora < 18) {
        console.log('BOA TARDE')
    } else {
        console.log('BOA NOITE')
    }
}