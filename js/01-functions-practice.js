//HALF NUMBER

// function halfNumber(num){
//     let halfNum = num/2
//     return halfNum
// }
// num = Number(prompt('Please enter a valid number'))
// console.log(`Half of ${num} is ${halfNumber(num).toFixed(2)}`)

//SQUARE OF A NUMBER
// function squareNumber(num){
//     let sqNum = num * num
//     return sqNum
// }
// num = Number(prompt('Please enter a valid number'))
// console.log(`The result of squaring the number ${num} is ${squareNumber(num)}`)

//PERCENT OF
// function percentOf(num1,num2){
//     let perNum = num1/num2 * 100
//     return perNum
// }
// num1 = Number(prompt('Please enter the smaller number'))
// num2 = Number(prompt('Please enter the larger number'))
// console.log(`${num1} is ${percentOf(num1,num2).toFixed()}% of ${num2}`)

//MODULUS
function findModulus(num1,num2){
    let mod = num1 % num2
    return mod
}
num1 = Number(prompt('Please enter the first number'))
num2 = Number(prompt('Please enter the second number'))
console.log(`${findModulus(num1,num2)} is the modulus of ${num1} and ${num2}`)

