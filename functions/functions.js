// function expression
// function anonymous
// sum quer dizer somar

//parâmetros (parameters)
/*const sum = function(number1, number2){
 console.log(number1 + number2)
}

sum(2, 3) // arguments
sum(4, 5)
*/
const sum = function(number1, number2){
    let total = number1 + number2 // cuidado com declarações sem declaração de variáveis, 
    // isso pode não funcionar. Sempre declare o let, const ou var.
    return total
}

let number1 = 54
let number2 = 45

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
// onsole.log(total)// por não ter palavra chave como let, var e const ele só funciona depois que o programa rodar.

//outro jeito de entender função
// função liquidificador
function liquidificador(fruta1, fruta2){
 return fruta1 + fruta2
}

liquidificador('banana', 'maçã')

console.log(copo)

// function scope

let subjet = 'create video' // esse te outra significado diferente do da função

function createThinks(subject) { // esse subject tem um significado, sempre determine ele dentro do atalho ou ele não vai existir.
    subject = 'Study'
    return subject
}
console.log(createThinks(subject)) // isso aqui é o return da função
console.log(subject)

// função hoisting
sayMyName()

function sayMyName(){ // não pode declara variável na function pois ela não vai ter elevação e vai da erro constante.
    console.log('Steven')
}

// Arrow function  
// esse é o jeito mais rápido de criar uma função
const sayMyName = (name) => {
    console.log(name)
}
sayMyName('STEVEN')

// calback function

function sayMyName(name){ // o que ele fez?
    // guardou isso na memória
    console.log('antes de executar uma callback') // rodou primeiro essa função

    name() // a função de fora foi chamada aqui.

        console.log('depois de executar a callback') // finalizou nessa aqui
}
sayMyName(
  () => {
    console.log('estou em uma callback') // trouxe pra dentro essa função
  }
)

/*

Function() constructor

* expressão new
* criar um novo objeto
*this keyword

*/

function Person(name){
 this.name = name
 this.walk = function(){
     return this.name + "está andando"
 }
}
const pedro = new Person("Pedro")
const steven = new Person ("Steven")
console.log(pedro.walk())
console.log(steven.walk())