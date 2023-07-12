const notas = {
    nill : 100,
    yungbuda: 80,
    felipeRet: 0
}

const resultado = Object.entries(notas).filter(numero => numero ? numero.length === 0 : null );
console.log(resultado)
//if ternario