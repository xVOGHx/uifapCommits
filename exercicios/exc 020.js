let RG = {
    nome: "guilherme fortes",
    documento:123.456,
    dataNascimento: 23.08
}

Object.entries(RG);
if(Object.entries(RG).length === 0){
    console.log("não tem coisas dentro")
}else{
    console.log("tem coisa dentro")
}