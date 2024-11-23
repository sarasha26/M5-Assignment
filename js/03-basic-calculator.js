
let num1,num2,oper

// ADD A FUNCTION CALLED CALCULATE
function calculate(x,y,op){

    switch(op){
        case '+':
            return x+y
        case '-':
            return x-y
        case '*':
            return x*y
        case '/':
            return x/y
    }

}

let loopAgain = 'f'
do{
// COLLECT FIRST NUMBER FROM USER
num1 = Number(prompt('Enter first number'))
console.log(`num1 is ${num1}`)

// COLLECT SECOND NUMBER FROM USER
num2 = Number(prompt('Enter second number'))
console.log(`num 2 is ${num2}`)

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
oper = prompt('Enter the operation to perform(+,-,*,/)')
if ((oper != '+' && oper != '-' && oper != '*' && oper != '/') || (Number.isNaN(num1))|| (Number.isNaN(num2))){
    alert('Invalid input! Try again!')
    loopAgain = 'y'
}
else loopAgain = 'f'
}while(loopAgain == 'y')


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(num1,num2,oper)
alert(`The result of ${num1} ${oper} ${num2} is ${result}`)
