let notas = [10,15,115];
let media = (notas[0]+notas[1]+notas[2]) /3 

if(media >= 7 && media <10){
    console.log (media.toFixed(1).replace(".",","), "APROVADO")
}
if(media === 10){
    console.log(media.toFixed(1).replace(".",","),"APROVADO COM DISTINÇÃO")
}else{
    console.log(media.toFixed(1).replace(".",","), "INFELIZMNTE, VOCÊ FOI REPROVADO")
}

