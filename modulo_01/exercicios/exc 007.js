let operação = "SOMA";
    operação = operação.toLowerCase();
let n1 = "2"
let n2 = " 3"

switch (operação){
    case "soma":
        console.log (`a conta é ${n1} + ${n2} = ${n1 + n2}`);
        break;
    case "subtração":
            console.log(`a conta é ${n1} - ${n2} = ${n1 - n2}`);
            break;
    case "adição":
        let adição = n1 * n2
        console.log(` conta é ${n1} * ${n2} = ${adição}`);
        break;
    case "divisão":
        let divisão = n1 / n2
        console.log(` conta é ${n1} ÷ ${n2} = ${divisão}`);
        break;
    default:
        console.log(`operação invalida`)
}