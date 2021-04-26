// switch

let expression =    'a'
switch (expression) {
case 'a':
    // linha de codigo a
    console.log('a')
    break
case 'b':
    // linha de codigo b
    console.log('b')
    break
default:
    console.log('default')
    break
}

function calculate(number1, operator, number2)
let result 

switch (operator) {
 case '+': 
    result = number1 + number2
    break
 case '-':
     result = number1 - number2
    break
 case'*':
     result = number1 * number2
    break
 case'/':
     result = number1 / number2
    break

    default:
        console.log('Não implementado')
        break;
}

console.log(calculate(45, '+', 25))