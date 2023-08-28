let permição = "direTor"
permição = permição.toLowerCase();

switch(permição){
    case "diretor":
        console.log("você tem a permição de diretor")
    break;
    case "gerente":
        console.log("você tem a permição de gerente")
    break;
    case "comum": 
        console.log("você tem permição comum")
    break;
    default: 
        console.log("voê não tem permição para entrar aqui");
}