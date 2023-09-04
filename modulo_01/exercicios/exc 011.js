let altura = 1.80
let peso = 100.00
let indice = peso / (altura*altura)
let total = indice.toFixed(1)
console.log(total)

if(total <= 18.5){
console.log("o seu indice de massa corporal é de:", total, "voce se encaixa no nivel de magreza")
}
else if(total >= 18.6 && total <= 24.9){
    console.log("o seu indice de massa corporal é de:", total, "voce se encaixa em um nivel normal")
}
else if(total >= 25.0 && total <= 29.9){
    console.log("o seu indice de massa corporal é de:", total, "voce se encaixa no nivel de sobrepeso")
}
else if(total >= 30.0 && total <= 39.9){
    console.log("o seu indice de massa corporal é de:", total, "voce se encaixa no nivel de obesidade")
}
else if(total >= 40.0){
    console.log("o seu indice de massa corporal é de:", total, "voce se encaixa no nivel de obesidade grave")
}else{
    console.log("digite um valor valido")
}
