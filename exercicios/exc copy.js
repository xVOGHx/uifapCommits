function parOuImpar(num){
    if (num % 2 === 0){
        return "par"
    }else{
        return "impar"
    }
}
console.log(parOuImpar(3))

var numbers = [1,56,78,32,45];
var sum = 0; 
for(var i =0;i<numbers. length;i++){ sum+=numbers[i]; }