let ListaDeCompras = {
    produtos: {
        macã: 2,
        pera: 3.5,
        detergente: 8
    }
}
valorAtual = 0;
for (let i in Object.values(ListaDeCompras.produtos) ){
    valorAtual = valorAtual + Object.values(ListaDeCompras.produtos)[i]
}
console.log(valorAtual)