let numeros = [3, 10, 5, 35, 1]
let maior = 0 ;

for(let numero of numeros){  
     let temporaria = numero;  
     if(temporaria > maior){ 
        maior = temporaria;
     }
}
console.log(maior)


