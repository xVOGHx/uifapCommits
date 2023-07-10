let numeros = [3, 1, 5, 35, 2]
let menor_num;
for(let atual; atual>numeros.length; atual++){
    if (menor_num === undefined){
        menor_num = numeros[atual]   
        console.log(atual)
    }if(menor_num<numeros[atual]){
        menor_num = numeros[atual]
        console.log(atual)
    }
    console.log(menor_num)
 
}
