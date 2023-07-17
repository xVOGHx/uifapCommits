let numeros = [1,10,30];

function total(numeros){
    let total= 0
    for(let i = 0; i < numeros.length; i++){
    total = total + numeros[i]
   } 
   return total
}
console.log(total(numeros))
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let nomes = ["ana","maria", "bianca","julia","guilherme","juliana"]
let NomesGrandes = []

let TamanhoNome = nomes.map(function(g){
    return g.length;
}) 
if(TamanhoNome >= 6){
    NomesGrandes.push([g.length])
}
console.log(TamanhoNome)
