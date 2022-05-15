// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add  = (x,y) => x + y;
const return5 = () => 5;

const doMath = (x ,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(17);
const result1 = add(17, 22);
const result15 = return5();
const result2 = doMath(7 ,5);

console.log(result);
console.log(result1);
console.log(result15);
console.log(result2);

